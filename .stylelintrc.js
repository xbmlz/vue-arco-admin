// @see: https://stylelint.io

module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-recommended-vue',
  ],
  customSyntax: 'postcss-html',
  overrides: [
    {
      files: ['**/*.{less,css}'], // css 相关文件由 postcss-scss 处理
      customSyntax: 'postcss-less',
    },
  ],
};
