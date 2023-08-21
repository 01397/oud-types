/**
 * @type {import('prettier').Options}
 */
const config = {
  env: {
    es2021: true,
    "jest/globals": true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "prettier",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "jest", "sort-keys-fix"],
  rules: {
    "sort-keys-fix/sort-keys-fix": "warn",
  },
};
module.exports = config;
