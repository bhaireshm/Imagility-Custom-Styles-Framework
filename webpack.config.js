const path = require('path');

module.exports = [
    {
        name: 'Index file',
        entry: './src/js/index.js',
        output: {
            filename: 'index.js',
            path: path.resolve(__dirname, 'dist/js/'),
        },
    },
    {
        name: "bootstrap",
        entry: {
            // main: './src/js/index.js',
            bootstrap: './node_modules/bootstrap/dist/js/bootstrap.js',
        }, output: {
            filename: 'bootstrap.js',
            path: path.resolve(__dirname, 'dist/js/')
        },
    },
    {
        name: "date",
        entry: {
            datetimepicker: './node_modules/bootstrap-datetime-picker/js/bootstrap-datetimepicker.min.js'
        }, output: {
            filename: 'datetimepicker.js',
            path: path.resolve(__dirname, 'dist/js/')
        },
    }
];
