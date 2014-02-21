module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: [
      'mocha',
      'requirejs'
    ],
    files: [
      'test/scripts/test-main.js',
      {pattern: 'src/**/*.js', included: false},
      {pattern: 'test/**/*.js', included: false}
    ],
    exclude: [
      'src/scripts/main.js'
    ],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: [
      'PhantomJS',
      'Chrome',
      'Safari',
      'Firefox'
    ],
    captureTimeout: 60000,
    singleRun: false
  });
};