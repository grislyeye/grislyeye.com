module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    copy: {
      assets: {
        files: [
          {
            expand: true,
            cwd: 'assets/',
            src: ['**', '!styles/**', '!scripts/**'],
            dest: 'dist/'
          }
        ],
      }
    },

    watch: {
      options: {
        livereload: true
      },
      metalsmith: {
        files: ['posts/**', 'layouts/**', "metalsmith.json"],
        tasks: ['exec:metalsmith']
      },
      less: {
        files: ['main.less', 'assets/styles/**'],
        tasks: ['less', 'cssmin']
      },
      assets: {
        files: ['assets/**', '!assets/styles/**'],
        tasks: ['copy:assets']
      }
    },

    less: {
      dist: {
        files: {
          'dist/main.css': 'main.less'
        }
      }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'dist',
          src: ['*.css', '!*.min.css'],
          dest: 'dist',
          ext: '.min.css'
        }]
      }
    },

    clean: {
      release: ["dist"]
    },

    connect: {
      server: {
        options: {
          port: 8000,
          base: 'dist',
          hostname: 'localhost',
          livereload: true
        }
      }
    },

    npmcopy: {
      dist: {
        options: {
          destPrefix: 'dist/vendor'
        },
        files: {
          'fontawesome/fonts': '@fortawesome/fontawesome-free/webfonts'
        }
      }
    },

    htmllint: {
      all: ['dist/*.html', 'dist/products/*.html']
    },

    exec: {
      metalsmith: {
        command: 'metalsmith'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-npmcopy');
  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('build', ['copy', 'less', 'cssmin', 'npmcopy']);
  grunt.registerTask('default', ['build']);
  grunt.registerTask('run', ['build', 'connect', 'watch']);
};
