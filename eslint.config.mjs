// eslint.config.mjs
import js from '@eslint/js';
import react from 'eslint-plugin-react';

export default [
  {
    files: ["**/*.js"],
    rules: {
        "no-undef": "error",
        "semi": "warn"
    }
  },
];