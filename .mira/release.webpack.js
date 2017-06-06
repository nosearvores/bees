module.exports = function webpackConfig (settings) {
  return {
    metadata: {
      generalIncludes: []
    },
    resolve: {
      extensions: ['.js', '.jsx']
    }
  };
};
