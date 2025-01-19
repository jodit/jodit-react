import React from 'react';
import { describe, it } from '@jest/globals';
import { render } from '@testing-library/react';
import JoditEditor from '../src';

describe('Smoke Test', () => {
	it('should render without crashing', () => {
		render(<JoditEditor />);
	});
});
