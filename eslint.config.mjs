import js from '@eslint/js';
import markdown from "eslint-plugin-markdown";
import pluginVue from 'eslint-plugin-vue';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },
  },
  ...pluginVue.configs['flat/recommended'],
  ...markdown.configs.recommended,
  // Uncomment the following 3 seconds to customize the markdown plugin
  // {
  //   plugins: {
  //     markdown,
  //   },
  // },
  // {
  //   files: ['**/*.md'],
  //   processor: 'markdown/markdown',
  // },
  // {
    // Optionally, customize the configuration ESLint uses for ```js
    // fenced code blocks inside .md files.
    // files: ["**/*.md/*.js"],
    // rules: {}
  // },
  {
    ignores: ['**/*.json']
  }
]
