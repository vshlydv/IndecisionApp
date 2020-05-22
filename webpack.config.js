//path is a node module that is used to concat two paths that can be little tricky and depends on whole lot of things like os etc
const path = require("path");

// __dirname contains current directory path
//console.log(__dirname)

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            loader: "babel-loader",
            test: /\.js$/,
            exclude: /node_modules/
        },
        {
            test:/\.s?css$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        }]
    },
    devtool: "cheap-module-eval-source-map", //source-map
    devServer: {
        contentBase: path.join(__dirname, "public"), 
    }
}