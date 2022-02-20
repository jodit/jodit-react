/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

module.exports = {
	root: true,
	parser: '@babel/eslint-parser',
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:prettier/recommended'
	],
	env: {
		browser: true,
		node: true
	}
};
