module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'plugin:react/recommended',
		'plugin:prettier/recommended',
		'plugin:react-hooks/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react', 'prettier', 'import', '@typescript-eslint'],
	rules: {
		'react/jsx-uses-react': 'off',
		'react/react-in-jsx-scope': 'off',
		'jsx-quotes': ['error', 'prefer-single'],
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				args: 'after-used',
				argsIgnorePattern: '^_.*?$',
				ignoreRestSiblings: false,
			},
		],
		'import/order': [
			'error',
			{
				pathGroups: [
					{
						group: 'external',
						pattern: '~/**',
						position: 'after',
					},
				],
			},
		],
		'no-console': 'warn',
		'padding-line-between-statements': [
			'error',
			{ blankLine: 'always', next: 'return', prev: '*' },
			{ blankLine: 'always', next: '*', prev: ['const', 'let', 'var'] },
			{
				blankLine: 'any',
				next: ['const', 'let', 'var'],
				prev: ['const', 'let', 'var'],
			},
		],
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
				jsxSingleQuote: true,
				printWidth: 100,
				semi: false,
				singleQuote: true,
				tabWidth: 2,
				trailingComma: 'es5',
				useTabs: true,
			},
		],
		// 'react/jsx-sort-props': [
		// 	'error',
		// 	{
		// 		callbacksLast: true,
		// 		noSortAlphabetically: false,
		// 		reservedFirst: true,
		// 		shorthandFirst: true,
		// 	},
		// ],
		'react/prop-types': 'off',
		'react/self-closing-comp': 'error',
		// 'sort-keys': ['warn', 'asc', { caseSensitive: true, minKeys: 2, natural: false }],
	},
}
