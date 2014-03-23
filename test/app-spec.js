define(function(require) {
  var app = require('app');
  var $ = require('jquery');

  describe('app', function() {
    var sandbox;

    beforeEach(function() {
      sandbox = sinon.sandbox.create();
    });

    afterEach(function(){
      sandbox.restore();
    });

    it('should prepend view', function() {
      sandbox.stub($.fn, 'prepend');
      app();
      expect($.fn.prepend).to.be.calledOnce;
    });
  });
});