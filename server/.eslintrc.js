module.exports = {
  root: true,
  overrides: [
    {
      files: ['*graphql.js', '*graphql.ts'],
      processor: '@graphql-eslint/graphql',
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2015
      }
    },
    {
      files: ['*.graphql'],
      parser: '@graphql-eslint/eslint-plugin',
      plugins: ['@graphql-eslint'],
      extends: ['plugin:@graphql-eslint/schema-recommended']
    }
  ]
}
