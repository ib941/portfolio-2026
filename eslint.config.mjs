import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const next = require('@next/eslint-plugin-next');
const reactHooks = require('eslint-plugin-react-hooks');
const jsxA11y = require('eslint-plugin-jsx-a11y');
const react = require('eslint-plugin-react');

export default [
  { ignores: ['.next/**', 'node_modules/**', 'scratch/**', 'dist/**'] },
  {
    files: ['**/*.{js,jsx,mjs}'],
    languageOptions: { ecmaVersion: 'latest', sourceType: 'module', parserOptions: { ecmaFeatures: { jsx: true } } },
    plugins: { '@next/next': next, 'react-hooks': reactHooks, 'jsx-a11y': jsxA11y, react },
    rules: {
      'no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^React$|^_' }],
      'react/jsx-uses-vars': 'error',
      ...next.configs.recommended.rules,
      ...next.configs['core-web-vitals'].rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
    },
  },
];
