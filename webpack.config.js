const path = require('path');
const outDir = path.resolve('dist');

module.exports = {
     entry: './src/main.js',
        output: {
            path: outDir,
            filename: "[name].bundle.js",
            chunkFilename: "[id].bundle.js"
        },
    module: {

        loaders: [
            { test: /\.json$/, loader: "json-loader" }
        ]
    }
}