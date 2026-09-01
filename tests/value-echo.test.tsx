import React, { useState } from 'react';
import { act, render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import type { IJodit } from 'jodit/esm/types/jodit';
import JoditEditor from '../src';

const tick = () => new Promise(resolve => setTimeout(resolve, 0));

// https://github.com/jodit/jodit-react/issues/217
describe('Controlled value echo', () => {
	it('should not write a stale onChange snapshot back into the editor', async () => {
		let jodit: IJodit | null = null;
		const onChange = vi.fn();

		const stamp = render(
			<JoditEditor
				value="<p>start</p>"
				onChange={onChange}
				editorRef={e => (jodit = e)}
			/>
		);
		await tick();
		expect(jodit).not.toBeNull();

		// two quick edits by the user, the parent has not re-rendered yet
		act(() => {
			jodit!.value = '<p>start a</p>';
			jodit!.value = '<p>start ab</p>';
		});
		expect(onChange).toHaveBeenCalledWith('<p>start a</p>');
		expect(onChange).toHaveBeenCalledWith('<p>start ab</p>');

		const setSpy = vi.spyOn(jodit!, 'setEditorValue');

		// the render for the FIRST edit lands late
		stamp.rerender(
			<JoditEditor
				value="<p>start a</p>"
				onChange={onChange}
				editorRef={e => (jodit = e)}
			/>
		);
		await tick();

		expect(setSpy).not.toHaveBeenCalled();
		expect(jodit!.value).toBe('<p>start ab</p>');

		// the render for the second edit catches up
		stamp.rerender(
			<JoditEditor
				value="<p>start ab</p>"
				onChange={onChange}
				editorRef={e => (jodit = e)}
			/>
		);
		await tick();
		expect(setSpy).not.toHaveBeenCalled();
		expect(jodit!.value).toBe('<p>start ab</p>');
	});

	it('should still apply a value that the parent set on its own', async () => {
		let jodit: IJodit | null = null;

		const stamp = render(
			<JoditEditor value="<p>start</p>" editorRef={e => (jodit = e)} />
		);
		await tick();

		act(() => {
			jodit!.value = '<p>typed</p>';
		});

		stamp.rerender(
			<JoditEditor
				value="<p>from server</p>"
				editorRef={e => (jodit = e)}
			/>
		);
		await tick();
		expect(jodit!.value).toBe('<p>from server</p>');

		// and a later echo of that programmatic value is a no-op again
		const setSpy = vi.spyOn(jodit!, 'setEditorValue');
		stamp.rerender(
			<JoditEditor
				value="<p>from server</p>"
				editorRef={e => (jodit = e)}
			/>
		);
		await tick();
		expect(setSpy).not.toHaveBeenCalled();
	});

	it('should work with the usual useState + onChange wiring', async () => {
		let jodit: IJodit | null = null;

		function App() {
			const [content, setContent] = useState('<p>start</p>');
			return (
				<JoditEditor
					value={content}
					onChange={setContent}
					editorRef={e => (jodit = e)}
				/>
			);
		}

		render(<App />);
		await tick();

		const setSpy = vi.spyOn(jodit!, 'setEditorValue');

		act(() => {
			jodit!.value = '<p>start a</p>';
		});
		await tick();

		// the echo of our own change must not be written back
		expect(setSpy).toHaveBeenCalledTimes(1); // only our own assignment
		expect(jodit!.value).toBe('<p>start a</p>');
	});
});
