Last login: Mon Oct  9 14:41:30 on ttys004
mq@QQ ~ $ ls
Applications Colors       Documents    Dropbox      General      JavaScript   Load         Movies       Music        Pictures     Shell        Text
CoffeeScript Desktop      Downloads    Editing      Helper       Library      MRU          Moving       Parallels    Public       Spell        logs
mq@QQ ~ $
mq@QQ ~ $
mq@QQ ~ $ j cos...
    mq@QQ ~ $ j cos__
mq@QQ ~ $ j cos__
/Users/mq/Documents/Backup/pycharm-themes/colors
mq@QQ ~/Documents/Backup/pycharm-themes/colors (master)$ lg
zsh: correct lg to gl [nyae]? n
zsh: command not found: lg
mq@QQ ~/Documents/Backup/pycharm-themes/colors (master)$
mq@QQ ~/Documents/Backup/pycharm-themes/colors (master)$ ls
All Hallow's Eve.icls  Cobalt.icls            Espresso Libre.icls    Mac Classic.icls       Pastels on Dark.icls   SpaceCadet.icls        django.icls
Amy.icls               Dawn.icls              IDLE.icls              MagicWB (Amiga).icls   Solarized (Dark).icls  Sunburst.icls          iPlastic.icls
Blackboard.icls        Eiffel.icls            LAZY.icls              Monokai Bright.icls    Solarized (Light).icls Zenburnesque.icls
 1 webpack.config.dev.js                                                                                                                                                        X
 const path = require('path');
 const webpack = require('webpack');
 const ExtractTextPlugin = require('extract-text-webpack-plugin');

 const ComponentFilter = require('./componentFilter.js');

 const config = require('./webpack.config.base');

 config.devtool = 'cheap-module-source-map';

-config.devServer = {
    |  contentBase: path.join(__dirname, "public"),
    |  port: 8080,
    |  watchContentBase: true,
    |  historyApiFallback: true,
    -  proxy: {
        2    "/api": "http://localhost:7001",
        2    "/data-api": "http://localhost:7001",
        2    "/admin": "http://localhost:7001",
        2    "/thirdparty": "http://localhost:7001"
        2  }
    |};

-const extractLess = new ExtractTextPlugin({
    |  filename: "[name].bundle.css",
     NORMAL   develop   webpack.config.dev.js                                                                                                                            11%     5:1
    "webpack.config.dev.js" 43L, 1068C
    mq@QQ ~/Documents/Backup/pycharm-themes/colors (master)$ j conso
    mq@QQ ~/Documents/Backup/pycharm-themes/colors (master)$ j conso
    /Users/mq/Documents/Meter10/console.roadhoc.com
    mq@QQ ~/Documents/Meter10/console.roadhoc.com (develop)$ git status
    mq@QQ ~/Documents/Meter10/console.roadhoc.com (develop)$ git status
    On branch develop
    Your branch is up-to-date with 'origin/develop'.
     1 webpack.config.dev.js                                                                                                                                                        X
     const path = require('path');
     const webpack = require('webpack');
     const ExtractTextPlugin = require('extract-text-webpack-plugin');

     const ComponentFilter = require('./componentFilter.js');

     const config = require('./webpack.config.base');

     config.devtool = 'cheap-module-source-map';

    -config.devServer = {
        |  contentBase: path.join(__dirname, "public"),
        |  port: 8080,
        |  watchContentBase: true,
        |  historyApiFallback: true,
        -  proxy: {
            2    "/api": "http://localhost:7001",
            2    "/data-api": "http://localhost:7001",
            2    "/admin": "http://localhost:7001",
            2    "/thirdparty": "http://localhost:7001"
            2  }
        |};

    -const extractLess = new ExtractTextPlugin({
         NORMAL   develop   webpack.config.dev.js                                                                                                                            11%     5:1
         1 webpack.config.dev.js                                                                                                                                                        X
         const path = require('path');
         const webpack = require('webpack');
         const ExtractTextPlugin = require('extract-text-webpack-plugin');

         const ComponentFilter = require('./componentFilter.js');

         const config = require('./webpack.config.base');

         config.devtool = 'cheap-module-source-map';

        -config.devServer = {
            |  contentBase: path.join(__dirname, "public"),
            |  port: 8080,
            |  watchContentBase: true,
            |  historyApiFallback: true,
            -  proxy: {
                2    "/api": "http://localhost:7001",
                2    "/data-api": "http://localhost:7001",
                2    "/admin": "http://localhost:7001",
                2    "/thirdparty": "http://localhost:7001"
                2  }
            |};

         NORMAL   develop   webpack.config.dev.js                                                                                                                            11%     5:1
        nothing to commit, working tree clean
         1 webpack.config.dev.js                                                                                                                                                        X
         const path = require('path');
         const webpack = require('webpack');
        calhost:7001",
        2    "/data-api": "http://localhost:7001",
        2    "/admin": "http://localhost:7001",
         NORMAL   develop   webpack.config.dev.js                                                                                                                            11%     5:1




         1 componentFilter.js                                                                                                                                                           X
        3      }
        2      callback();
        2    });
    |  });
 };

-ComponentFilter.prototype.isComponent = function (modulePath) {
    -  const directoryMatch = this.directories.some(directory => {
        2    return modulePath && modulePath.indexOf(directory) === 0;
        2  });
    |
        |  if (!directoryMatch) return false;
    |  return this.extensions.includes(path.extname(modulePath));
    |};

 module.exports = ComponentFilter;
 NORMAL   develop   componentFilter.js                                                                                                                               98%    81:1
"componentFilter.js" 82L, 2400C

