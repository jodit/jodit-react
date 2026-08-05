import React, { useEffect, useRef } from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import JoditEditor from '../src';
import type { IJodit } from 'jodit/esm/types/jodit';

// https://github.com/jodit/jodit-react/issues/301
describe('Editor methods through ref', () => {
	it('setReadOnly(true) from a parent effect should survive initialization', async () => {
		let editor: IJodit | null = null;

		const App = () => {
			const ref = useRef<IJodit>(null);

			useEffect(() => {
				editor = ref.current;
				ref.current?.setReadOnly(true);
			}, []);

			return <JoditEditor ref={ref} />;
		};

		render(<App />);

		await vi.waitFor(() => {
			expect(editor).toBeTruthy();
		});

		await editor!.waitForReady();

		expect(editor!.getReadOnly()).toBe(true);
	});

	it('ref should point to the live instance after the editor is recreated', async () => {
		const ref = React.createRef<IJodit>();
		let lastCreated: IJodit | null = null;

		const App = ({ height }: { height: number }) => (
			<JoditEditor
				ref={ref}
				// inline object: new identity each render → editor is recreated
				config={{ height }}
				editorRef={instance => {
					lastCreated = instance;
				}}
			/>
		);

		const elm = render(<App height={300} />);

		await vi.waitFor(() => {
			expect(ref.current).toBeTruthy();
		});

		elm.rerender(<App height={400} />);

		await vi.waitFor(() => {
			expect(lastCreated).toBeTruthy();
		});

		await lastCreated!.waitForReady();

		// the forwarded ref must track the recreated instance,
		// not the destructed first one
		expect(ref.current).toBe(lastCreated);
		expect(ref.current!.isInDestruct).toBe(false);
	});
});
