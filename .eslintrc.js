module.exports = {
    "extends": "airbnb",
    "plugins": [
        "import"
    ],
    "rules": { 
        "indent": ["error", 4],
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/prefer-stateless-function": "off",
        "import/prefer-default-export": "off",
        "react/jsx-no-bind": "off",
        "no-underscore-dangle": "off",
        "prefer-template": "off",
        "jsx-a11y/label-has-for" : "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "react/forbid-prop-types": "off",
        "jsx-a11y/no-noninteractive-element-interactions": "off",
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    },
    "globals": {
        "document": true,
    },
    "settings": {
        "import/resolver": {
            "node": {
                "paths": ["src"]
            }
        }
    },
    "env": {
        "jest": true
    }
};
