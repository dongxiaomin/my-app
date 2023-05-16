// module.exports={
//     mode: "development"
// }

// const HtmlWebpackPlugin = require("html-webpack-plugin");

// module.exports = {
//     module: {
//         rules: [{ test: /\.tsx$/i, use: "ts-loader" }],
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: "index.html",
//         }),
//     ],
// };



// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack'); // 用于访问内置插件

// module.exports = {
//       module: {
//         rules: [{ test: /\.$/, use: 'raw-loader' }],
//       },
//     plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
//     entry: {
//         app: './src/index.tsx',
//         search: './src/search.js',
//     },
//     output: {
//         filename: '[name].js',
//         path: __dirname + '/dist',
//     },
//     mode: "development"
// };



// const path = require('path');

// const HtmlWebpackPlugin = require('html-webpack-plugin')
// module.exports = {
//     //打包环境，测试环境还是生产环境，不添加会报警告
//     mode: 'development',
//     module: {
//         rules: [
//             { test: /\.css$/, use: 'css-loader' },
//             //   { test: /\.ts$/, use: 'ts-loader' },
//             //   { test: /\.(js|ts|jsx|tsx)$/, use: 'ts-loader' },
//             {
//                 test: /\.tsx?$/,
//                 exclude: /node_modules/,
//                 use: ["ts-loader"]
//             },
//             {
//                 test: /\.(js|ts|jsx)$/,
//                 exclude: /node_modules/,
//                 use: ["ts-loader"]
//             },
            
//             // {
//             //     loader: 'ts-loader',options: {
//             //         // configFile: './tsconfig.json',// !! WRONG
//             //         configFile: path.resolve('./tsconfig.json'),// CORRECT
//             //     },}
//         ],
//     },
//     //相对路径
//     entry: './src/index.tsx',
//     //输出配置
//     output: {
//         //输出在项目根目录的dist文件夹，会自动创建
//         path: path.resolve(__dirname, './dist'),
//         //js的文件名称
//         filename: 'dist.bundle.js',
//     },
//     // resolve: {
//     //     extensions: [".tsx", ".ts", ".js", ".jsx", ".css", ".scss"]
//     // },
// }