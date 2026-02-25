import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  ...nextCoreWebVitals,
  ...nextTypescript,
  prettierConfig,
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      'react/jsx-props-no-spreading': 'off',
      'react/function-component-definition': 'off',
      'import/prefer-default-export': 'off',
      'react/require-default-props': 'off',
      'react/no-unused-prop-types': 'off',
      'react/button-has-type': 'off',
      'no-underscore-dangle': 'off',
      'react/no-array-index-key': 'off',
    },
  },
  {
    ignores: ['next.config.mjs', 'postcss.config.js', 'tsconfig.json', 'out/**'],
  },
];
