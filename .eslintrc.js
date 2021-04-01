module.exports = {
    env: {
        es6: true,
        node: true,
        browser: true
    },
    extends: ['standard', 'prettier', 'plugin:wdio/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint', 'prettier', 'wdio'],
    rules: {
        'prettier/prettier': 'error'
    }
};
