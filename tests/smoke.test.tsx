import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import JoditEditor from '../src';

describe('Smoke Test', () => {
	it('should render without crashing', async () => {
		const { asFragment, findByText } = render(
			<JoditEditor value={'<p>Hello, world!</p>'} />
		);
		const element = await findByText('Hello, world!');
		expect(element).toBeTruthy();
		expect(asFragment()).toMatchSnapshot();
	});

	describe('Config', () => {
		it('should render without crashing', async () => {
			const config = {
				readonly: true,
				sourceEditor: 'ace',
				disabled: true
			};

			const { asFragment, findByText } = render(
				<JoditEditor value={'<p>Hello, world!</p>'} config={config} />
			);
			const element = await findByText('Hello, world!');
			expect(element).toBeTruthy();
			expect(asFragment()).toMatchSnapshot();
		});
	});
});
