import js from "@eslint/js";
import globals from "globals";

export default [
  {
    files: ["**/*.js"],
    ...js.configs.recommended,
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        ...globals.node,
        process: "readonly"
      }
    },
    rules: {
      "no-console": "off",
      "no-unused-vars": "warn"
    }
  }
];