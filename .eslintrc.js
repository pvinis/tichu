/* eslint-disable no-unused-vars */
var OFF = 0
var WARN = 1
var ERR = 2
/* eslint-enable no-unused-vars */

module.exports = {
	root: true,
	// extends: [
	// '@decadejs/eslint-config-base',
	// '@decadejs/eslint-config-react',
	// ],

	parser: '@typescript-eslint/parser',
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	parserOptions: {
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ['@typescript-eslint', 'react'],
	extends: [
		'eslint:recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
	],
	settings: {
		react: {
			version: 'detect',
		},
	},
	rules: {
		indent: [ERR, 'tab', { SwitchCase: 1 }],
		semi: [ERR, 'never'],
		'comma-dangle': [ERR, 'always-multiline'],
		quotes: [ERR, 'single'],
		'jsx-quotes': [ERR, 'prefer-single'],
		'no-multiple-empty-lines': [ERR, { max: 2 }],
		'object-curly-spacing': [ERR, 'always'],
		'key-spacing': ERR,
		'array-bracket-spacing': ERR,
		'arrow-spacing': ERR,
		'no-multi-spaces': [ERR, { 'ignoreEOLComments': true }], // has exceptions too, if needed
		'comma-spacing': ERR,

		// imports
		'import/newline-after-import': [ERR, { count: 2 }],
		'import/order': [ERR, {
			groups: [
				['builtin', 'external'],
				'internal',
				['sibling', 'parent', 'index'],
			],
			'newlines-between': 'always',
		}],
		'space-infix-ops': ERR,
		'default-case': ERR,


		'react/react-in-jsx-scope': [OFF],
		'react/jsx-curly-spacing': [ERR, 'never'],
		'react/jsx-indent': [ERR, 'tab'],
		'react/jsx-tag-spacing': ERR,
		'react/display-name': OFF,
		'react/prop-types': OFF,

		'@typescript-eslint/type-annotation-spacing': ERR,
		// eslint-disable-next-line no-dupe-keys
		semi: OFF,
		'@typescript-eslint/semi': [ERR, 'never'],
		// eslint-disable-next-line no-dupe-keys
		'comma-dangle': OFF,
		'@typescript-eslint/comma-dangle': [ERR, 'always-multiline'],
		// eslint-disable-next-line no-dupe-keys
		'space-infix-ops': OFF,
		'@typescript-eslint/space-infix-ops': [ERR, { 'int32Hint': false }],
		// eslint-disable-next-line no-dupe-keys
		'comma-spacing': OFF,
		'@typescript-eslint/comma-spacing': ERR,

		'@typescript-eslint/explicit-module-boundary-types': OFF,
	},
}


///ovverride for the tsx files for react stuff? or eslint file inside the packages?
