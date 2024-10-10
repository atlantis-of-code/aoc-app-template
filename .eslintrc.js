const prettierConfig = require('./.prettierrc.js');

module.exports = {
    "ignorePatterns": [
      '.eslintrc.js',
      'dist-types',
      'dist',
      '*.js',
      "build.ts"
    ],
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "overrides": [{
      files: ["*.js"],
      parser: 'espree'
    }],
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "prettier/prettier": ["error", prettierConfig],
        "@typescript-eslint/consistent-type-imports": "error",
        "no-console": ["error", {"allow": [""]}]
    }
};
