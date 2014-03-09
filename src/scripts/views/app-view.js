define(function(require) {
  var Backbone = require('backbone');
  var AppTemplate = require('../templates/app');
  var bootstrap = require('bootstrap');

  var AppView = Backbone.View.extend({
    render: function() {
      this.$el.html(AppTemplate.renderSync());
    }
  });

  return AppView;
});