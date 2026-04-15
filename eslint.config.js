import { defineConfig, globalIgnores } from "eslint/config";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default defineConfig([
  globalIgnores(["**/node_modules", "**/_site"]),
  {
    extends: compat.extends("plugin:wc/recommended"),

    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module"
    },

    settings: {
      wc: {
        elementBaseClasses: ["LitElement"]
      }
    },

    rules: {
      "comma-dangle": ["error", "never"],
      "no-undef": 0,
      "import/no-extraneous-dependencies": 0,
      "import/extensions": 0,
      "arrow-body-style": 0
    }
  }
]);
