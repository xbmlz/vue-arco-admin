// @see: http://eslint.cn

const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
	root: true,
	// 指定运行的环境
	env: {
		browser: true,
		es6: true,
		node: true
	},
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
		ecmaVersion: 2020,
		sourceType: 'module'
	},
	// 启动的规则
	extends: [
		'plugin:vue/vue3-recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'plugin:prettier/recommended'
	],
	// 插件
	plugins: [
		'@typescript-eslint'
	],
	/**
	 * "off"   或 0   ==>  关闭规则
	 * "warn"  或 1   ==>  打开的规则作为警告（不影响代码执行）
	 * "error" 或 2   ==>  规则作为一个错误（代码不能执行，界面报错）
	 */
	rules: {
		// eslint (http://eslint.cn/docs/rules)
		'no-var': 'error',                                  // 要求使用 let 或 const 而不是 var
		'no-multiple-empty-lines': ['error', { max: 1 }],		// 不允许多个空行
		"no-use-before-define": "off", 											// 禁止在 函数/类/变量 定义之前使用它们
		"prefer-const": "off",															// 此规则旨在标记使用 let 关键字声明但在初始分配后从未重新分配的变量，要求使用 const
		"no-irregular-whitespace": "off", 									// 禁止不规则的空白

		// typeScript (https://typescript-eslint.io/rules)
		"@typescript-eslint/ban-ts-ignore": "off", 									// 禁止使用 @ts-ignore
		"@typescript-eslint/ban-types": "off", 											// 禁止使用特定类型
		"@typescript-eslint/no-unused-vars": "error",       				// 禁止定义未使用的变量
		"@typescript-eslint/no-var-requires": "off", 								// 不允许在 import 语句中使用 require 语句
		"@typescript-eslint/no-inferrable-types": "off", 						// 可以轻松推断的显式类型可能会增加不必要的冗长
		"@typescript-eslint/no-namespace": "off", 									// 禁止使用自定义 TypeScript 模块和命名空间。
		"@typescript-eslint/no-empty-function": "off", 							// 禁止空函数
		"@typescript-eslint/no-explicit-any": "off", 								// 禁止使用 any 类型
		"@typescript-eslint/no-use-before-define": "off",   				// 禁止在变量定义之前使用它们
		"@typescript-eslint/no-non-null-assertion": "off", 					// 不允许使用后缀运算符的非空断言(!)
		"@typescript-eslint/explicit-module-boundary-types": "off", // 要求导出函数和类的公共类方法的显式返回和参数类型

		// vue (https://eslint.vuejs.org/rules)
		"vue/no-v-html": "off",                    	// 禁止使用 v-html
		"vue/attributes-order": "off",             	// vue api使用顺序，强制执行属性顺序
		'vue/html-closing-bracket-newline': 'off', 	// 在标签的右括号之前要求或禁止换行
		'vue/multi-word-component-names': 'off',    // 要求组件名称始终为 “-” 链接的单词
		"vue/max-attributes-per-line": "off", 			// 强制每行的最大属性数
	}
})
