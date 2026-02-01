import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		environment: 'jsdom', // для React
		globals: true // если хочешь describe/it без импорта
	}
});
