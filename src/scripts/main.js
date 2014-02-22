require.config({
  appDir: '..',
  baseUrl: 'scripts',
  paths: {
    'jquery': './libs/jquery',
    'lodash': './libs/lodash',
    'backbone': './libs/backbone',
    'q': './libs/q',
    'q/queue': './libs/queue',
    'dust': './libs/dust',
    'templates': '../templates'
  },
  shim: {
    'dust': {
      exports: 'dust'
    }
  },
  map: {
    backbone: {
      'underscore': 'lodash'
    }
  }
});

require(['./app'], function(app) {
  app();
});