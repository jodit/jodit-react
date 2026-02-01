import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import JoditEditor from '../src';

describe('On change Test', () => {
	describe('On init', () => {
		it('should not call handler', async () => {
			const onChange = vi.fn();
			const value = '<p>Hello, World!</p>';
			render(<JoditEditor value={value} onChange={onChange} />);
			await new Promise(resolve => setTimeout(resolve, 0));
			expect(onChange).toHaveBeenCalledTimes(0);
		});
	});

	describe('On change text', () => {
		it('should call handler every time', async () => {
			const onChange = vi.fn();
			let value = '<p>Hello, World!</p>';
			const stamp = render(
				<JoditEditor value={value} onChange={onChange} />
			);
			value = '<p>Hello!</p>';
			stamp.rerender(<JoditEditor value={value} onChange={onChange} />);
			await new Promise(resolve => setTimeout(resolve, 0));
			expect(onChange).toHaveBeenCalledTimes(1);
		});
	});
});
