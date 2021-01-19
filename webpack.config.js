const path = require('path');

module.exports = {
    entry: path.join(__dirname, '/client/index.js'), 
    output: {
        path: path.join(__dirname, '/dist'),
        publicPath: '/dist/',
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
          {
            test: /.(js|jsx)$/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
              },
            },
            exclude: /node_modules/,
          },
          {
            test: /\.s[ac]ss$/i,
            use: ['style-loader', 'css-loader', 'sass-loader'],
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },
          { 
            test: /\.css$/, 
            use: ['style-loader', 'css-loader'] 
          }
        ]
    },
    mode: process.env.NODE_ENV,

    devServer: {
        host: 'localhost',
        port: 8080,
        // "Content not from Webpack is served from...":
        contentBase: path.join(__dirname, '/'), 
        // enable HMR on the devServer
        hot: true,
        // fallback to root for other urls
        historyApiFallback: true,
        inline: true,
        headers: { 'Access-Control-Allow-Origin': '*' },
        proxy: {
          '/': {
             target: 'http://localhost:3000/',
            secure: false,
           },
        },
      },
      resolve: {
        extensions: ['.js', '.jsx'],
      },
}


/*
original package.json scripts:

"prod": "NODE_ENV='production' webpack --watch & nodemon server/server.js",
    "dev": "NODE_ENV=development webpack serve --open --hot & nodemon server/server.js",
    "build": "NODE_ENV=production webpack",
    "start": "NODE_ENV='production' nodemon server/server.js",
    "test": "echo \"Error: no test specified\" && exit 1"



** original webpack.configure: **




//         '/auth': {
//             target: 'http://localhost:3000/',
//             secure: false,
//           },
//         '/lists': {
//             target: 'http://localhost:3000/',
//             secure: false,
//           }

notes for devServer proxy
* proxy is required in order to make api calls to
* express server while using hot-reload webpack server
* routes api fetch requests from localhost:8080/api/* (webpack dev server)
* to localhost:3000/api/* (where our Express server is running)
         


    // plugins: [
    //     new HtmlWebpackPlugin({  //what does this do?
    //         template: './index.html'
    //     })
    // ],



*/