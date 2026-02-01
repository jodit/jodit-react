import React from 'react';
import { render, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import JoditEditor from '../src';
import type { IJodit } from 'jodit/types/types/jodit';

describe('Ref Test', () => {
	describe('Ref as function', () => {
		it('should be instance of imperative Jodit', async () => {
			const ref = React.createRef<IJodit>();

			const App = () => (
				<JoditEditor
					ref={newRef => {
						ref.current = newRef;
					}}
				/>
			);

			const elm = render(<App />);

			act(() => {
				elm.rerender(<App />);
			});

			await act(async () => {});

			expect(ref.current?.isJodit).toBe(true);
		});
	});

	describe('Ref as object', () => {
		it('should be instance of imperative Jodit', async () => {
			const ref = React.createRef<IJodit>();

			const App = () => <JoditEditor ref={ref} />;

			await act(async () => {});

			const elm = render(<App />);

			act(() => {
				elm.rerender(<App />);
			});

			expect(ref.current?.isJodit).toBe(true);
		});
	});
});
