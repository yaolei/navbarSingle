const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "mt",
    projectName: "navbar",
    webpackConfigEnv,
    argv,
  });

  return webpackMerge.smart(defaultConfig, {
    module:{
      rules:[
        {
          test: `/\.css$/`,
          use: [ 'style-loader', 'css-loader' ]
        }
      ]
    }
    // modify the webpack config however you'd like to by adding to this object
  });
};
