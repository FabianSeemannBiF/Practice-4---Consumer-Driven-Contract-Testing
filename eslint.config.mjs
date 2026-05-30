import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  pluginJs.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node, // This tells ESLint that 'require', 'module', etc. are valid globals
      }
    },
    rules: {
      "no-var": "error",          // Forces 'var' to be an error (triggers our code smell)
      "eqeqeq": "error",          // Forces strict equality === (triggers our loose equality smell)
      "no-empty": "error",        // Flags empty function blocks
      "no-self-compare": "error"  // Flags user.role === user.role
    }
  }
];