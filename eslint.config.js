[
    {
        ignores: [
            "node_modules",
            "dist",
            "coverage",
            "webpack.common.js",
            "webpack.dev.js",
            "webpack.prod.js"
        ],
        "extends": "airbnb-base",
        "env": {
            "es6": true,
            "browser": true,
            "jest": true
        },
        "rules": {
            "no-restricted-syntax": [
                "error",
                "LabeledStatement",
                "WithStatement"
            ],
            "indent": [
                "error",
                4
            ]
        }
    }
]
