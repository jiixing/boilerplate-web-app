require.config({
  baseUrl: 'scripts',
  shim: {
    'jquery': {
      exports: '$'
    }
  },
  paths: {
    jquery: './libs/jquery'
  }
});

require(['./app'], function(app) {
	app();
});