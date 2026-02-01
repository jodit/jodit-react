import React from 'react';
import { render, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import JoditEditor from '../src';
import type { IJodit } from 'jodit/esm/types/jodit';

describe('Smoke Test', () => {
	it('should render without crashing', async () => {
		const { asFragment, findByText } = render(
			<JoditEditor value={'<p>Hello, world!</p>'} />
		);
		await act(async () => {});
		const element = await findByText('Hello, world!');
		expect(element).toBeTruthy();
		expect(asFragment()).toMatchSnapshot();
	});

	describe('Config', () => {
		it('should render without crashing', async () => {
			let editor: IJodit | null = null;

			const config = {
				readonly: true,
				sourceEditor: 'ace',
				disabled: true
			};

			const { asFragment, findByText } = render(
				<JoditEditor
					value={'<p>Hello, world!</p>'}
					config={config}
					editorRef={instance => {
						editor = instance;
					}}
				/>
			);

			await vi.waitFor(() => {
				expect(editor).toBeTruthy();
			});

			await editor!.waitForReady();
			const element = await findByText('Hello, world!');
			expect(element).toBeTruthy();
			expect(asFragment()).toMatchSnapshot();
		});
	});
});
