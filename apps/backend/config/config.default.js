/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1615045109274_4419';

  // add your middleware config here
  config.middleware = ['compress'];

  // add your user config here
  const userConfig = {
    compress: {
      threshold: 2048,
    },
    mongoose: {
      client: {
        url: 'mongodb://127.0.0.1/wenjuandiaocha',
        options: {},
        // mongoose global plugins, expected a function or an array of function and options
        plugins: [],
      },
    },
    security: {
      domainWhiteList: [ ],
      csrf: {
        enable: false,
      }
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
