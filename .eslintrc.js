module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: ['airbnb-typescript'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.test.tsx', '**/*.stories.tsx'],
      },
    ],
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': ['off'],
    'react/prop-types': ['off'],
  },
};
