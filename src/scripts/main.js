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
  config: {
    gdl: {
      ext: '.js.dust',
      helper: 'bluebird'
    }
  },
  paths: {
    'text': './libs/requirejs-text/js/text',
    'gdl': './libs/grunt-dustjs-linkedin/dust',
    'dust-helper': './libs/grunt-dustjs-linkedin/dust-helper',
    'bluebird-helper': './libs/grunt-dustjs-linkedin/bluebird-helper',
    'jquery': './libs/jquery/jquery',
    'lodash': './libs/lodash/lodash.compat',
    'backbone': './libs/backbone/backbone',
    'bluebird': './libs/bluebird/bluebird',
    'dust': './libs/dustjs-linkedin-helpers/js/dust-helpers',
    'dust-full': './libs/dustjs-linkedin-helpers/js/dust-helpers',
    'moment': './libs/moment/moment'
  },
  shim: {
    'dust': {
      exports: 'dust',
      deps: [
        './libs/dustjs-linkedin/js/dust-core'
      ]
    },
    'dust-full': {
      exports: 'dust',
      deps: [
        './libs/dustjs-linkedin/js/dust-full'
      ]
    }
  },
  map: {
    backbone: {
      'underscore': 'lodash'
    }
  },
  stubModules: [
    'gdl',
    'dust-helper',
    'bluebird-helper',
    'text'
  ]
});

if(!isKarma) {
  require(['./app'], function(app) {
    app();
  });
}
else {
  var config = requirejs.s.contexts._.config;
  config.baseUrl = '/base/src/scripts';
  config.deps = tests;
  config.callback = window.__karma__.start;
  require.config(config);
}