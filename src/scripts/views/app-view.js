define(function(require) {
  var Backbone = require('backbone');
  var AppTemplate = require('gdl!../templates/app');

  var AppView = Backbone.View.extend({
    render: function() {
      this.$el.html(AppTemplate.renderSync());
      return this;
    }
  });

  return AppView;
});