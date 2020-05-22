module.exports = {
    parser: 'babel-eslint',
    extends: ['eslint:recommended'],
    env: {
        browser: true,
        node: true,
    },
    ignorePatterns: ['/dist'],
};
