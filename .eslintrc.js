module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/jsx-runtime',
  ],
  ignorePatterns: ['dist', 'node_modules'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  root: true,
  rules: {
    '@typescript-eslint/explicit-function-return-type': ['error'],
    '@typescript-eslint/no-empty-function': 'off',
    'arrow-parens': 2,
    'no-console': 2,
    'no-duplicate-imports': 2,
    'no-tabs': 2,
  },
}
