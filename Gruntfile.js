module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    copy: {
      assets: {
        files: [
          {
            expand: true,
            cwd: 'assets/',
            src: ['**', '!scripts/**'],
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
      assets: {
        files: ['assets/**'],
        tasks: ['copy:assets']
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
          'fontawesome': '@fortawesome/fontawesome-free',
          'skeleton': 'skeleton-css/css/skeleton.css',
          'modern-normalize': 'modern-normalize'
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
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-npmcopy');
  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('build', ['copy', 'npmcopy']);
  grunt.registerTask('default', ['build']);
  grunt.registerTask('run', ['build', 'connect', 'watch']);
};
