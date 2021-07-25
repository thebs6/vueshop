/* eslint-disable no-irregular-whitespace */
module.exports = {
  // 对Babel解析器的包装使其与 ESLint 兼容。
  root: true,

  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020
  },

  env: {
    node: true
  },

  extends: ["plugin:vue/essential", "eslint:recommended"],

  rules: {
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-console': 'off',
    'no-debugger': 'off',
    'space-before-function-paren': 'off',
    'no-underscore-dangle': 0,
    'vue/no-template-key': 'warn',
    'vue/require-v-for-key': 'warn',
    'vue/valid-template-root': 'warn',
    'vue/valid-v-model': 'warn',
    'vue/valid-v-on': 'off'
  },

  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ]
};
