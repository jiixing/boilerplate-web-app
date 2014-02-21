define(function(require) {
	var $ = require('jquery');
	var _ = require('lodash');
	var Backbone = require('backbone');
	var Q = require('q');
	var queue = require('q/queue');

	return function() {
		console.log($);
		console.log(_);
		console.log(Backbone);
		console.log(Q);
		console.log(queue);
	};
});