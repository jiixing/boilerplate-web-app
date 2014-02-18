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
        compress: true
      },
      build: {
        expand: true,
        cwd: 'src',
        src: '**/*.css.less',
        dest: 'dist',
        ext: '.css',
        filter: 'isFile'
      }
    },
    dust: {
      options: {
        wrapper: 'amd',
        relative: true,
        runtime:false
      },
      build: {
        expand: true,
        cwd: 'src',
        src: "**/*.js.dust",
        dest: 'dist',
        ext: '.js',
        filter: 'isFile'
      }
    },
    coffee: {
      build: {
        expand: true,
        cwd: 'src',
        src: '**/*.js.coffee',
        dest: 'dist',
        ext: '.js',
        filter: 'isFile'
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
          keepBuildDir: true,
          modules: [
            {
              name: 'scripts/app'
            }
          ]
        }
      }
    },
    jshint: {
      options: {
        jshintrc: true
      },
      build: [
        'src/**/*.js'
      ]
    },
    uglify: {
      options: {
        compress: {
          drop_console: true
        }
      },
      build: {
        expand: true,
        cwd: 'dist',
        src: "**/*.js",
        dest: 'dist',
        filter: 'isFile'
      }
    },
    htmlmin: {
      options: {
        removeComments: true,
        collapseWhitespace: true
      },
      build: {
        expand: true,
        cwd: 'src',
        src: '**/*.html',
        dest: 'dist',
        ext: '.html',
        filter: 'isFile'
      }
    },
    bower: {
      build: {
        options: {
          layout: 'byComponent'
        }
      }
    },
    watch: {
      options: {
        interupt: true,
        livereload: true
      },
      js: {
        files: 'src/**',
        tasks: [
          'default'
        ]
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', [
    'clean',
    'copy',
    'less',
    'jshint',
    'dust',
    'coffee',
    'requirejs',
    'uglify',
    'htmlmin'
  ]);
};