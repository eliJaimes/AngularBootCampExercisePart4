/* ••[1]••••••••••••••••••••••••• prettier.config.js •••••••••••••••••••••••••••••• */

/** @type {import("prettier").Config} */
module.exports = {
	arrowParens: 'always',
	bracketSpacing: true,
	jsxSingleQuote: true,
	plugins: ['prettier-plugin-tailwindcss'],
	quoteProps: 'as-needed',
	semi: true,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: 'all',
	useTabs: true,
};
