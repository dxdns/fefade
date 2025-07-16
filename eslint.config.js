import js from "@eslint/js"
import sveltePlugin from "eslint-plugin-svelte"
import vuePlugin from "eslint-plugin-vue"
import globals from "globals"
import ts from "typescript-eslint"
import svelteConfig from "./packages/svelte/svelte.config.js"
import prettier from "eslint-config-prettier"

export default ts.config(
	js.configs.recommended,
	...ts.configs.recommended,

	{
		ignores: [
			"**/dist/**",
			"**/build/**",
			"**/node_modules/**",
			"**/public/**",
			"**/.svelte-kit/**",
			"**/.*"
		]
	},

	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},

	...sveltePlugin.configs["flat/recommended"],
	{
		files: ["**/*.svelte", "**/*.svelte.ts", "**/*.svelte.js"],
		languageOptions: {
			parserOptions: {
				parser: ts.parser,
				extraFileExtensions: [".svelte"],
				svelteConfig
			}
		},
		rules: {
			//"no-at-html-tags": "error",
		}
	},

	...vuePlugin.configs["flat/recommended"],
	{
		files: ["**/*.vue"],
		languageOptions: {
			parserOptions: {
				parser: ts.parser,
				extraFileExtensions: [".vue"],
				ecmaVersion: "latest",
				sourceType: "module"
			}
		},
		rules: {
			"vue/html-indent": ["warn", "tab"],
			"vue/no-v-html": "off",
			"vue/multi-word-component-names": "off",
			"vue/singleline-html-element-content-newline": [
				"warn",
				{
					ignoreWhenNoAttributes: false,
					ignoreWhenEmpty: true,
					ignores: []
				}
			],
			"vue/multiline-html-element-content-newline": "warn",
			"vue/max-attributes-per-line": [
				"warn",
				{
					singleline: 1,
					multiline: 1
				}
			]
		}
	},

	{
		files: ["**/*.ts", "**/*.tsx"],
		languageOptions: {
			parserOptions: {
				projectService: true
			}
		}
	},

	{
		rules: {
			"@typescript-eslint/no-empty-object-type": "off",
			"@typescript-eslint/no-unused-vars": [
				"warn",
				{ argsIgnorePattern: "^_" }
			],
			"@typescript-eslint/no-explicit-any": "off",
			"no-control-regex": "off"
		}
	},
	{
		...prettier
	}
)
