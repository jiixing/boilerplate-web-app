define(function(require) {
  var jquery = require('jquery');
  var dust = require('dust');
  var AppView = require('./views/app-view');

  return function() {
    var appView = new AppView();
    $('body').html(appView.$el);
    appView.render();
  };
});