require.config({
  paths: {
    'jquery': './libs/jquery',
    'lodash': './libs/lodash',
    'backbone': './libs/backbone',
    'q': './libs/q',
    'q/queue': './libs/queue'
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