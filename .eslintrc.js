const path = require('path');

module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['prettier'],
  globals: {
    window: true
  },
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx']
      }
    ],
    'react/prop-types': 0,
    'no-underscore-dangle': 0,
    'import/imports-first': ['error', 'absolute-first'],
    'import/newline-after-import': 'error'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@components', path.resolve(__dirname, 'src/components')],
          ['@config', path.resolve(__dirname, './src/config')],
          ['@content', path.resolve(__dirname, './src/content')],
          ['@fonts', path.resolve(__dirname, './src/fonts')],
          ['@images', path.resolve(__dirname, './src/images')],
          ['@pages', path.resolve(__dirname, './src/pages')],
          ['@styles', path.resolve(__dirname, './src/styles')],
          ['@utils', path.resolve(__dirname, './src/utils')]
        ]
      }
    }
  }
};
