define(['module'], function(module) {
  var dustc = module.config() || {};

  return {
    load: function(name, req, onload, config) {
      if(config.isBuild) {
        req([name], function(value) {
          onload(value);
        });
      }
      else {
        if(require.defined(name)) {
          req([name], function(value) {
            onload(value);
          });

          return;
        }

        req(['text', 'dust-full', 'q'], function(text, dust, Q) {
          var url = dustc.url || config.baseUrl;
          var ext = dustc.ext || '.dust';
          var helper = dustc.helper || 'dust';
          var file = name;

          var dustHelper = function(name) {
            return {
              render: function(context, callback) {
                if(!callback && typeof context === 'function') {
                  callback = context;
                  context = {};
                }

                dust.render(name, context, callback);
              },

              renderSync: function(context) {
                if(!context) {
                  context = {};
                }

                var output;

                dust.render(name, context, function(error, html) {
                  if(error) {
                    throw error;
                  }

                  output = html;
                });

                return output;
              },

              stream: function(context, callback) {
                if(!callback && typeof context === 'function') {
                  callback = context;
                  context = {};
                }

                dust.stream(name, context, callback);
              }
            };
          };

          var qHelper = function(name) {
            return {
              render: function(context) {
                if(!context) {
                  context = {};
                }

                return Q.nfcall(dust.render, name, context);
              },

              renderSync: function(context) {
                if(!context) {
                  context = {};
                }

                var output;

                dust.render(name, context, function(error, html) {
                  if(error) {
                    throw error;
                  }

                  output = html;
                });

                return output;
              },

              stream: function(context, callback) {
                if(!context) {
                  context = {};
                }

                return Q.nfcall(dust.stream, name, context);
              }
            };
          };

          if(helper === 'dust') {
            helper = dustHelper;
          }

          if(helper === 'q') {
            helper = qHelper;
          }

          if(file && file[0] !== '.') {
            file = url + file;
          }

          if(file.indexOf(ext, file.length - ext.length) === -1) {
            file += ext;
          }

          text.get(req.toUrl(file), function(data) {
            dust.loadSource(dust.compile(data, name));
            onload(helper(name));
          });
        });
      }
    },

    write: function (pluginName, moduleName, write, config) {
      var contents = 'define(["' + moduleName + '"], function(value) {' +
                        'return value;' +
                      '});';
      write.asModule(pluginName + '!' + moduleName, contents);
    }
  };
});