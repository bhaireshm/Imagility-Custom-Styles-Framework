const path = require('path');

// module.exports = [
//     {
//         name: 'index',
//         entry: './src/js/index.js',
//         output: {
//             filename: 'index.js',
//             path: path.resolve(__dirname, 'dist/js/'),
//         },
//     },
//     {
//         name: "bootstrap",
//         entry: {
//             // main: './src/js/index.js',
//             bootstrap: './node_modules/bootstrap/dist/js/bootstrap.js',
//         }, output: {
//             filename: 'bootstrap.js',
//             path: path.resolve(__dirname, 'dist/js/')
//         },
//     },
//     {
//         name: "date",
//         entry: {
//             datetimepicker: './node_modules/bootstrap-datetime-picker/js/bootstrap-datetimepicker.min.js'
//         }, output: {
//             filename: 'datetimepicker.js',
//             path: path.resolve(__dirname, 'dist/js/')
//         },
//     }
// ];

module.exports = {
    name: "main",
    entry: [
        "./src/js/index.js",
        "./node_modules/bootstrap/dist/js/bootstrap.js",
        // "./node_modules/bootstrap-datetime-picker/js/bootstrap-datetimepicker.js"
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

