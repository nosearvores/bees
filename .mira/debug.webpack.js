const path = require('path');
const fs = require('fs');

module.exports = function webpackConfig (settings) {
  const engineersNodeModulesPath = path.resolve(
    settings.engineers.path,
    'node_modules'
  );

  return {
    metadata: {
      generalIncludes: []
    },
    entry: {
      main: [
        'react-hot-loader/patch',
        engineersNodeModulesPath + '/webpack/hot/only-dev-server'
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    }
  };
};
