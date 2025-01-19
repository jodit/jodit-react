import React from 'react';
import { describe, it } from '@jest/globals';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import JoditEditor from '../src';

describe('Theme Test', () => {
	it('should render with theme classname', () => {
		const { container } = render(
			<JoditEditor config={{ theme: 'summer' }} />
		);
		expect(
			container
				.querySelector('.jodit-container')!
				.classList.contains('jodit_theme_summer')
		).toBe(true);
	});
});
