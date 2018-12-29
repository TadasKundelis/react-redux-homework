module.exports = {
    "extends": ["airbnb", "plugin:react/recommended"],
    rules: {
        "linebreak-style": ["error", "windows"],
        "no-console": 0,
        "no-use-before-define":0,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "camelcase": 0,
        "react/jsx-one-expression-per-line":0,
        "comma-dangle": ["error", "never"]
    },
    "env": {
        "browser": true,
        "node": true,
        "jest": true,
    },
    "parser": "babel-eslint"
};