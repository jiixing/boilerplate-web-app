var isKarma = !!window.__karma__;

if(isKarma) {
  var tests = [];

  for(var file in window.__karma__.files) {
    if(window.__karma__.files.hasOwnProperty(file)) {
      if(/-spec\.js$/.test(file)) {
        tests.push(file);
      }
    }
  }
}

require.config({
  appDir: '..',
  baseUrl: 'scripts',
  paths: {
    'jquery': './libs/jquery/jquery',
    'lodash': './libs/lodash/lodash.compat',
    'backbone': './libs/backbone/backbone',
    'q': './libs/q/js/q',
    'q/queue': './util/queue',
    'dust': './libs/dustjs-linkedin-helpers/js/dust-helpers'
  },
  shim: {
    'dust': {
      exports: 'dust',
      deps: [
        './libs/dustjs-linkedin/js/dust-core'
      ]
    }
  },
  map: {
    backbone: {
      'underscore': 'lodash'
    }
  }
});

if(!isKarma) {
  require(['./app'], function(app) {
    app();
  });
}
else {
  var config = requirejs.s.contexts._.config;
  config.deps = tests;
  config.callback = window.__karma__.start;
  require.config(config);
}