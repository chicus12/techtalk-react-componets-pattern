module.exports = {
  extends: ['airbnb', 'prettier', 'plugin:mdx/recommended'],
  plugins: ['prettier'],
  parser: 'babel-eslint',
  rules: {
    'no-extra-semi': 0,
    'no-prototype-builtins': 0,
    semi: 0,
    strict: [0, 'global'],
    'no-useless-escape': 0,
    'linebreak-style': 0,
    'prettier/prettier': ['warn', { semi: false, singleQuote: true, trailingComma: 'es5' }],
    'react/jsx-uses-vars': 2,
    'react/jsx-uses-react': 2,
    'react/react-in-jsx-scope': 2,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-one-expression-per-line': 0,
    'react/no-array-index-key': 0,
    'react/no-unused-state': 0,
    'import/no-extraneous-dependencies': 0
  }
};