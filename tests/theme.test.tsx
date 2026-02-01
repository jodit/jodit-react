import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import JoditEditor from '../src';

describe('Theme Test', () => {
	it('should render with theme classname', async () => {
		const { container } = render(
			<JoditEditor config={{ theme: 'summer' }} />
		);
		await new Promise(resolve => setTimeout(resolve, 1000));
		expect(
			container
				.querySelector('.jodit-container')!
				.classList.contains('jodit_theme_summer')
		).toBe(true);
	});
});
