module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        // js
        "eslint:recommended",
        // vue
        // "plugin:vue/vue3-essential" // LV1
        "plugin:vue/vue3-strongly-recommended" // LV2
        // "plugin:vue/vue3-recommended" // LV3
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        parser: "@babel/eslint-parser",
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "vue/html-closing-bracket-newline": ["error", {
            "singleline": "never",
            "multiline": "never"
          }],
          "vue/html-self-closing": ["error", {
            "html": {
              "void": "always",
              "normal": "never",
              "component": "always"
            },
            "svg": "always",
            "math": "always"
          }]
        
    }
}
