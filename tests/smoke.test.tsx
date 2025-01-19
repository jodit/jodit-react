import React from 'react';
import { describe, it } from '@jest/globals';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import JoditEditor from '../src';

describe('Smoke Test', () => {
	it('should render without crashing', () => {
		const { asFragment, getByText } = render(
			<JoditEditor value={'<p>Hello, world!</p>'} />
		);
		expect(getByText('Hello, world!')).toBeInTheDocument();
		expect(asFragment()).toMatchSnapshot();
	});

	describe('Config', () => {
		it('should render without crashing', () => {
			const config = {
				readonly: true,
				sourceEditor: 'ace',
				disabled: true
			};

			const { asFragment, getByText } = render(
				<JoditEditor value={'<p>Hello, world!</p>'} config={config} />
			);
			expect(getByText('Hello, world!')).toBeInTheDocument();
			expect(asFragment()).toMatchSnapshot();
		});
	});
});
