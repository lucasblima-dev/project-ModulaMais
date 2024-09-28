module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'prettier'
  ],
  rules: {
    'prettier/prettier': ['error', {
      singleQuote: true,
      tabWidth: 2,
      trailingComma: 'none',
      semi: true
    }],
    'node/exports-style': [
      'error',
      'module.exports'
    ],
    'node/file-extensions-in-import': [
      'error',
      'always'
    ],
    'node/prefer-global/buffer': [
      'error',
      'always'
    ],
    'node/prefer-global/console': [
      'error',
      'always'
    ],
    'node/prefer-global/process': [
      'error',
      'always'
    ],
    'node/prefer-global/url-search-params': [
      'error',
      'always'
    ],
    'node/prefer-global/url': [
      'error',
      'always'
    ],
    'node/prefer-promises/dns': 'error',
    'node/prefer-promises/fs': 'error'
  }
};
