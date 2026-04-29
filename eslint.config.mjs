import js from "@eslint/js";
import globals from "globals";

export default [
  {
    ...js.configs.recommended,

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        ...globals.node
      }
    },

    rules: {
      "no-console": "off",
      "no-unused-vars": "warn"
    }
  }
];
