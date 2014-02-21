define(function(require) {
  var $ = require('jquery');
  var _ = require('lodash');
  var Backbone = require('backbone');
  var Q = require('q');
  var queue = require('q/queue');
  var dust = require('dust');

  return function() {
    console.log('jquery', $);
    console.log('lodash', _);
    console.log('backbone', Backbone);
    console.log('q', Q);
    console.log('q/queue', queue);
    console.log('dust', dust);
  };
});