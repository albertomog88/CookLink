import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
	{files: [ "**/*.js" ], languageOptions: {sourceType: "commonjs"}},
	{languageOptions: { globals: {...globals.browser, ...globals.node} }},
	pluginJs.configs.recommended,
	{
		rules: {
			"no-extra-parens": "error",
			"curly": ["error", "multi"],
			"eqeqeq": "warn",
			"no-else-return": "warn",
			"no-empty-function": "warn",
			"no-eq-null": "error",
			"no-eval": "error",
			"no-extra-bind": "warn",
			"no-invalid-this": "error",
			"no-loop-func": "error",
			"no-magic-numbers": ["error", { "ignoreArrayIndexes": true }],
			"no-multi-spaces": "error",
			"no-new-wrappers": "error",
			"no-redeclare": "error",
			"no-return-await": "warn",
			"no-sequences": "error",
			"no-throw-literal": "error",
			"no-unmodified-loop-condition": "warn",
			"no-unused-expressions": "warn",
			"no-useless-call": "warn",
			"no-useless-concat": "warn",
			"no-useless-return": "error",
			"no-void": "error",
			"no-warning-comments": ["warn", {"terms": [ "TODO" ]}],
			"radix": "warn",
			"require-await": "error",
			"no-catch-shadow": "warn",
			"no-shadow": "warn",
			"no-shadow-restricted-names": "warn",
			"global-require": "error",
			"no-mixed-requires": "error",
			"no-new-require": "error",
			"no-path-concat": "error",
			"array-bracket-newline": ["error", { "multiline": true }],
			"array-bracket-spacing": ["error", "never", { "singleValue": true }],
			"block-spacing": "error",
			"brace-style": ["error", "stroustrup"],
			"camelcase": "warn",
			"capitalized-comments": "error",
			"comma-dangle": ["error", "never"],
			"comma-spacing": ["error", { "before": false, "after": true }],
			"comma-style": "error",
			"computed-property-spacing": "error",
			"eol-last": ["error", "always"],
			"func-call-spacing": "error",
			"func-style": ["error", "declaration", { "allowArrowFunctions": true }],
			"function-paren-newline": "warn",
			"indent": ["error", "tab"],
			"key-spacing": "error",
			"keyword-spacing": "error",
			"max-len": "off",
			"multiline-ternary": ["error", "always-multiline"],
			"new-parens": "error",
			"newline-per-chained-call": ["error", { "ignoreChainWithDepth": 2 }],
			"no-array-constructor": "error",
			"no-lonely-if": "error",
			"no-multi-assign": "error",
			"no-multiple-empty-lines": ["error", {"maxEOF": 1 }],
			"no-nested-ternary": "error",
			"no-trailing-spaces": "error",
			"no-unneeded-ternary": "error",
			"no-whitespace-before-property": "error",
			"nonblock-statement-body-position": "warn",
			"object-curly-newline": ["error", { "multiline": true }],
			quotes: ["error", "double", { "allowTemplateLiterals": true }],
			semi: "error",
			"semi-spacing": "error",
			"semi-style": "error",
			"space-before-blocks": "error",
			"space-before-function-paren": "error",
			"spaced-comment": "error",
			"arrow-body-style": "error",
			"arrow-parens": ["error", "as-needed"],
			"arrow-spacing": "error",
			"no-useless-computed-key": "error",
			"no-useless-rename": "error",
			"no-var": "error",
			"prefer-arrow-callback": "error",
			"prefer-const": "error",
			"prefer-template": "warn",
			"no-unused-vars": ["error", {caughtErrors: "none"}]
		}
	}
];
