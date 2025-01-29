import path from 'path';
import { fileURLToPath } from 'url';

import pluginJs from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseConfig = [
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: globals.browser,
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: path.resolve(__dirname, '../../tsconfig.json'), 
        tsconfigRootDir: path.resolve(__dirname, '../..'),
      },
    },
    ignores: ['node_modules/*", "**/.next/**'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: true,
        }
      ],
      '@typescript-eslint/explicit-function-return-type': [
        'warn',
        {
          allowExpressions: true,
          allowTypedFunctionExpressions: true,
        }
      ],
      '@typescript-eslint/prefer-optional-chain': 'error',
      '@typescript-eslint/switch-exhaustiveness-check': 'error',
      '@typescript-eslint/no-empty-interface': 'error',
      '@typescript-eslint/no-use-before-define': [
        'error',
        {
          functions: false,
          classes: true,
          variables: true,
        }
      ],
      'import/no-cycle': 'error',
      'import/no-unresolved': 'error',
      'import/imports-first': 'error',
      'import/prefer-default-export': 'off',
      'no-unused-vars': 'error',
      eqeqeq: 'error',
      'no-console': 'error',
      'prefer-const': 'error',
      indent: ['error', 2],
      quotes: ['error', 'single'],
      complexity: ['error', 20],
      camelcase: 'error',
      'no-duplicate-imports': 'error',
      'no-else-return': 'error',
      'no-eval': 'error',
      'no-debugger': 'error',
      'no-new-wrappers': 'error',
      'no-duplicate-case': 'error',
      'no-nested-ternary': 'error',
      'no-unused-expressions': 'error',
      'object-shorthand': 'error',
      'prefer-template': 'error',
      'consistent-return': 'error'
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended
];



export default baseConfig;