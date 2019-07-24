var path = require('path');

module.exports = {
    devtool: "source-map",
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.min.js",
        path: __dirname + "/dist/js"
    },


    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            '@definitions/*': path.resolve(__dirname + "/../definitions/*")
        }
    },

    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.tsx?$/,
                loader: 'tslint-loader',
                exclude: /node_modules/,
                options: {
                    failOnHint: false,
                    configuration: require('./tslint.json')
                }
            },
            {
                test: /\.tsx?$/,
                use: 'awesome-typescript-loader',
                exclude: /node_modules/
            }
        ]
    }
};
