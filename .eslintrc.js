module.exports = {
  root: true,
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    browser: true
  },
  globals: {
    shallow: false,
    render: false,
    mount: false
  },
  plugins: ['react', 'prefer-object-spread', 'compat'],
  rules: {
    'max-len': ['error', 120],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js'] }]
  }
};
