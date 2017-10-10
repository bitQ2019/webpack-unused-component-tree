const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const siteConfig = require('./site.config.json');
const pages = Object.keys(siteConfig.pages);
const pagePlugins = pages.map((page) => {
  return new HtmlWebpackPlugin({
    template: path.join(__dirname, siteConfig.pages[page]),
    filename: `${page}.html`
  })
});

function generateBaseConfig() {
  return {
    entry:  {
      main: ['jquery', __dirname + '/app/app.js']
    },
    output: {
      path: path.join(__dirname, '/public'),
      filename: '[name].bundle.js',
      sourceMapFilename: '[name].map'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
            presets: ['es2015']
          }
        },
      {
          test: /\.(less)$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', {
              loader: 'postcss-loader',
              options: {
                plugins: function() {
                  return [
                    require('autoprefixer')
                  ];
                },
                sourceMap: true
              }
            }, {
              loader: 'less-loader',
              options: {
                sourceMap: true,
                globalVars: siteConfig.theme
              }
            }]
          })
        },
        {
          test(filePath) {
            return /\.(gif|png|jpe?g|svg)$/i.test(filePath) && !/fonts/.test(filePath);
          },
          loader: 'url-loader',
          options: {
            limit: 1024 * 25, // 25k
            publicPath: '/',
            outputPath: 'images/',
          }
        },
        {
          test(filePath) {
            return /\.(eot|svg|ttf|woff|woff2)$/i.test(filePath) && /fonts/.test(filePath);
          },
          loader: 'file-loader',
          options: {
            outputPath: 'fonts/',
            publicPath: '/'
          }
        },
        {
          test: /\.(pug)$/,
          loader: 'pug-loader',
          options: {
            root: 'app/'
          }
        },
        /*
        {
          test: /\.(html)$/,
          use: {
            loader: 'html-loader',
            options: {
              minimize: true
            }
          }
        },
        */
        {
          test: /\.(md)$/,
          use: [
            {
              loader: 'pug-loader',
              options: {
                root: 'app/'
              }
            },
            {
              loader: 'md-loader',
              options: {
                layoutDir: 'app/Layout'
              }
            },
          ]
        }
      ],
    },
    resolve: {
      alias: {
        app: path.join(__dirname, 'app'),
        stylesheets: path.join(__dirname, 'assets', 'stylesheets'),
        templates: path.join(__dirname, 'assets', 'templates'),
        images: path.join(__dirname, 'assets', 'images'),
        utils: path.join(__dirname, 'utils'),
        jquery: path.join(__dirname, 'assets', 'javascripts', 'jquery-3.2.1.js'),
      }
    },
    resolveLoader: {
      modules: ['node_modules', path.join(__dirname, 'loaders')],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {NODE_ENV: JSON.stringify('production')},
      }),
      new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor'
      }),
      ...pagePlugins
    ],
  }
}

module.exports = generateBaseConfig;
