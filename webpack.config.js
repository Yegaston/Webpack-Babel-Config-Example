const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtactPlugin = require('mini-css-extract-plugin')
module.exports = {

    // Esto es la entrada.
    entry: {
        //Es el archivo que toma como entrada.
        app: [
            "@babel/polyfill",
            './src/app/index.js',
        ],

    },

    // Esta es la salida.
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/app.bundle.js',
    },

    // Configuracion de plugins.
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        // Este plugin permite convertir codigo de css
        new MiniCssExtactPlugin({
            filename: 'css/app.bundle.css'
        })
    ],

    // Configuraciones del servidor de desarrollo.
    devServer: {
        port: 4000,
    },

    // Css Loader (Para css xdxd)

    module: {
        rules: [
            // Estas reglas, de alguna forma aclara que tiene que convertir, y que tiene que usar.
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtactPlugin.loader,
                    'css-loader',
                ]
            },
        ]
    }

}