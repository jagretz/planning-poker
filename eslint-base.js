/**
 * All formatting rRule should be managed by prettier. We turn off multiple eslint rules
 * in order to remove conflicts with prettier rules.
 */
module.exports = {
    env: { browser: true },
    "parserOptions": {
        "ecmaVersion": 9
    },
    rules: {
        "function-paren-newline": "off",
        "arrow-parens": "off",
        "arrow-body-style": ["error", "as-needed", { requireReturnForObjectLiteral: false }],
        "func-names": "off",
        indent: [
            "error",
            4,
            {
                SwitchCase: 1,
                VariableDeclarator: 1,
                outerIIFEBody: 1,
                FunctionDeclaration: {
                    parameters: 1,
                    body: 1
                },
                FunctionExpression: {
                    parameters: 1,
                    body: 1
                }
            }
        ],
        "no-bitwise": ["error", { allow: ["~"] }],
        "no-console": ["error", { allow: ["info", "warn", "error"] }],
        "no-debugger": "error",
        "no-plusplus": "off",
        "no-param-reassign": "off",
        "no-prototype-builtins": "warn",
        "no-unused-expressions": ["error", { allowShortCircuit: true, allowTernary: true }],
        "no-use-before-define": ["error", { functions: false }],
        "max-len": "off",
        "object-curly-newline": [
            "error",
            {
                ObjectExpression: { multiline: true, minProperties: 4, consistent: true },
                ObjectPattern: { multiline: true, minProperties: 4 },
                ImportDeclaration: { multiline: true, minProperties: 7 },
                ExportDeclaration: { multiline: true, minProperties: 7 }
            }
        ],
        "quotes": ["error", "double", { avoidEscape: true }],
        "space-before-function-paren": ["error", { anonymous: "never", named: "never", asyncArrow: "ignore" }],
        "spaced-comment": "off",
        /*
         * Rules for jsdoc.
         */
        "require-jsdoc": [
            "warn",
            {
                require: {
                    FunctionDeclaration: true,
                    MethodDefinition: true,
                    ClassDeclaration: false,
                    ArrowFunctionExpression: true,
                    FunctionExpression: true
                }
            }
        ],
        "valid-jsdoc": [
            "warn",
            {
                prefer: {
                    arg: "param",
                    argument: "param",
                    virtual: "abstract"
                },
                requireReturn: false,
                requireReturnType: true
            }
        ]
    }
};
