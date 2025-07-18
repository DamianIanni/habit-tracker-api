const eslintPluginPrettier = require("eslint-plugin-prettier");
const eslintConfigPrettier = require("eslint-config-prettier");

module.exports = [
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: require("@typescript-eslint/parser"),
      parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module",
      },
    },
    overrides: [
      {
        files: ["jest.config.ts"],
        parserOptions: {
          project: null, // desactiva el type-checking para este archivo
        },
      },
    ],
    plugins: {
      "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...require("@typescript-eslint/eslint-plugin").configs.recommended.rules,
      "prettier/prettier": "error",
    },
  },
];
