module.exports = {
    entry: './index.js',
    target: 'node',
    output: {
        path: './build',
        filename: 'index.js',
        libraryTarget: 'commonjs2',
    },
};