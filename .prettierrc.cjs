touch .prettierrc.cjs
module.exports = {
    singleQuote: true,
    plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-tailwindcss'],
    organizeImportsSkipDestructiveCodeActions: true,
  };