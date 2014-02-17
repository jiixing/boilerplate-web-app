module.exports = function(grunt) {
  grunt.initConfig({
    clean: {
      build: [
        'dist'
      ]
    },
    copy: {
      build : {
        expand: true,
        cwd: 'src',
        src: '**',
        dest: 'dist',
        filter: 'isFile'
      }
    },
    less: {
      options: {
        sourceMap: true,
        outputSourceFiles: true,
        compress: true
      },
      build: {
        expand: true,
        cwd: 'src',
        src: '**/*.css.less',
        dest: 'dist',
        ext: '.css'
      }
    },
    dust: {
      options: {
        wrapper: 'amd',
        relative: true
      },
      build: {
        expand: true,
        cwd: 'src',
        src: "**/*.js.dust",
        dest: 'dist',
        ext: '.js',
      }
    },
    requirejs: {
      build: {
        options: {
          appDir: 'src',
          baseUrl: '.',
          dir: 'dist',
          mainConfigFile: 'src/scripts/config.js',
          optimize: 'none',
          modules: [
            {
              name: 'scripts/app'
            }
          ]
        }
      }
    },
    uglify: {
      options: {
        sourceMap: true,
        sourceMapIncludeSources: true,
        compress: {
          drop_console: true
        }
      },
      build: {
        expand: true,
        cwd: 'dist',
        src: "**/*.js",
        dest: 'dist'
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', [
    'clean',
    'copy',
    'less',
    'dust',
    'requirejs',
    'uglify'
  ]);
};