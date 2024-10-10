const prettierConfig = require('../.prettierrc.js');

// Had to turn .json into .js for webstorm to work, look at comment by "Ihor Oleksandrov commented 24 Aug 2021 14:18" https://youtrack.jetbrains.com/issue/WEB-47201
module.exports = {
  "root": true,
  "ignorePatterns": [
    "projects/**/*",
    "node_modules",
    "dist",
    ".eslintrc.js"
  ],
  "overrides": [
    {
      "files": [
        "*.ts"
      ],
      "parserOptions": {
        "project": [
          "tsconfig.json",
          "e2e/tsconfig.json"
        ],
        "createDefaultProgram": true
      },
      "extends": [
        "eslint:recommended",
        "plugin:import/recommended",
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates", // TODO: see for more configs https://github.com/angular-eslint/angular-eslint/tree/main/packages/eslint-plugin-template/src/configs
        "plugin:prettier/recommended"
      ],
      "rules": {
        "prettier/prettier": ["error", prettierConfig],
        "import/named": ["warn"], // to not report typed imports as errors when import type is not used
        "@typescript-eslint/member-ordering": "off",
        "@typescript-eslint/explicit-member-accessibility": [
          "off",
          {
            "accessibility": "explicit"
          }
        ],
        "@typescript-eslint/prefer-for-of": [
          "off"
        ],
        "@angular-eslint/no-host-metadata-property": "off",
        "arrow-parens": [
          "off",
          "always"
        ],
        "import/order": "off",
        "import/no-unresolved": "off",
        "import/no-duplicates": ["error", {"considerQueryString": true}],
        "no-console": ["error", {"allow": [""]}],
        "no-unused-vars": ["error", { "args": "none" }],
        "no-undef": "off"
      }
    },
    {
      "files": [
        "*.html"
      ],
      "extends": [
        "plugin:@angular-eslint/template/recommended"
      ],
      "rules": {
        "@angular-eslint/template/eqeqeq": [
          "error",
          {
            "allowNullOrUndefined": true
          }
        ]
      }
    }
  ]
}
