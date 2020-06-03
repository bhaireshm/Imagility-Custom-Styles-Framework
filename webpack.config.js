const path = require('path');

module.exports = {
    name: "main",
    entry: [
        "./src/js/index.js",
        "./node_modules/bootstrap/dist/js/bootstrap.js"
    ],
    output: {
        path: path.resolve(__dirname, 'dist/js/'),
        filename: "imagility.js"
    },
    mode: 'production',
    performance: {
        hints: false
    },
}

