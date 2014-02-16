module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      build: [
        '<%=pkg.config.build.dest%>'
      ]
    },
    copy: {
      build : {
        expand: true,
        cwd: '<%=pkg.config.build.src%>',
        src: '**',
        dest: '<%=pkg.config.build.dest%>',
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
        cwd: '<%=pkg.config.build.src%>',
        src: '**/*.css.less',
        dest: '<%=pkg.config.build.dest%>',
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
        cwd: '<%=pkg.config.build.src%>',
        src: "**/*.js.dust",
        dest: '<%=pkg.config.build.dest%>',
        ext: '.js',
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
        cwd: '<%=pkg.config.build.dest%>',
        src: "**/*.js",
        dest: '<%=pkg.config.build.dest%>'
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', [
    'clean',
    'copy',
    'less',
    'dust',
    'uglify'
  ]);
};