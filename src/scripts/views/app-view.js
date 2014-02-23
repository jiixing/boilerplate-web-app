define(function(require) {
  var Backbone = require('backbone');
  var AppTemplate = require('templates/app.js');
  var bootstrap = require('bootstrap');

  var AppView = Backbone.View.extend({
    render: function() {
      this.$el.html(AppTemplate());
    }
  });

  return AppView;
});