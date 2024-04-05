import js from '@eslint/js';

export default [
  js.configs.recommended,
  // maybe add vue3-recommended if needed
  {
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },
  },
  {
    ignores: ['**/*.json']
  }
]
