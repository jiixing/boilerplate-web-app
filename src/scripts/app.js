define(function(require) {
  var $ = require('jquery');
  var AppView = require('./views/app-view');

  return function() {
    this.appView = new AppView();
    $('body').prepend(appView.render().$el);
  };
});