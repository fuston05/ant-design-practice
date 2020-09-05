// craco config file
const config= require('./src/themeOverride');
const CracoLessPlugin= require('craco-less');

module.exports= {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: config,
            javascriptEnabled: true,
          },//lessOptions
        },
      },//options
    }
  ]
}