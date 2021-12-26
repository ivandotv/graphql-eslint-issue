module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    jest: true
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    /* enabling "project" field is a performance hit
      https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md#performance
    */
    sourceType: 'module'
  },
  overrides: [
    {
      files: ['*.graphql', '*.gql'],
      parser: '@graphql-eslint/eslint-plugin',
      plugins: ['@graphql-eslint'],
      extends: 'plugin:@graphql-eslint/schema-recommended',
      // parserOptions: {
      // operations: './src/**/*.graphql'
      // schema: './src/user.graphql'
      // schema: './src/**/*.graphql'
      // },
      rules: {
        '@graphql-eslint/known-type-names': 'error'
      }
    },
    {
      files: ['*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-var-requires': 'off'
      }
    }
  ]
}
