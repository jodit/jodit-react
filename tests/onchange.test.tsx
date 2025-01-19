import React from 'react';
import { describe, it } from '@jest/globals';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import JoditEditor from '../src';

describe('On change Test', () => {
	describe('On init', () => {
		it('should not call handler', () => {
			const onChange = jest.fn();
			const value = '<p>Hello, World!</p>';
			render(<JoditEditor value={value} onChange={onChange} />);
			expect(onChange).toHaveBeenCalledTimes(0);
		});
	});

	describe('On change text', () => {
		it('should call handler every time', async () => {
			const onChange = jest.fn();
			let value = '<p>Hello, World!</p>';
			const stamp = render(
				<JoditEditor value={value} onChange={onChange} />
			);
			value = '<p>Hello!</p>';
			stamp.rerender(<JoditEditor value={value} onChange={onChange} />);
			expect(onChange).toHaveBeenCalledTimes(1);
		});
	});
});
