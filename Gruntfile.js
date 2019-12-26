module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    copy: {
      assets: {
        files: [
          {
            expand: true,
            cwd: 'assets/',
            src: ['**', '!styles/**'],
            dest: 'dist/'
          }
        ],
      },
      bower_components: {
        files: [
          {
            expand: true,
            follow: true,
            cwd: 'bower_components/',
            src: ['**'],
            dest: 'dist/vendor/'
          }
        ],
      }
    },

    watch: {
      options: {
        livereload: true
      },
      metalsmith: {
        files: ['helpers/**', 'posts/**', 'layouts/**', "metalsmith.json"],
        tasks: ['metalsmith:blog']
      },
      less: {
        files: ['main.less', 'assets/styles/**'],
        tasks: ['less', 'cssmin']
      },
      assets: {
        files: ['assets/**', '!assets/styles/**'],
        tasks: ['copy:assets', 'imagemin:assets']
      },
      bower_components: {
        files: ['bower_components/**'],
        tasks: ['copy:bower_components']
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

    imagemin: {
      assets: {
        files: [{
          expand: true,
          cwd: 'dist/images',
          src: ['**/*.{png,jpg,gif,svg, ico}'],
          dest: 'dist/images'
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

    html5validate: {
      src: 'dist/*.html'
    },

    metalsmith: {
      blog: {
        src: './posts',
        dest: './dist',
        options: {
          clean: false,
          metadata: {},
          plugins: {
            'metalsmith-ignore': [
              'posts/index.md'
            ],
            'metalsmith-markdown': {},
            'metalsmith-path': {},
            'metalsmith-publish': {},
            'metalsmith-collections': {
              articles: {
                pattern: '*.md',
                sortBy: 'date',
                reverse: true,
                limit: 5
              }
            },
            'metalsmith-discover-partials': {
              directory: 'layouts/partials'
            },
            'metalsmith-discover-helpers': {
              directory: 'helpers'
            },
            'metalsmith-layouts': {
              directory: 'layouts',
              default: 'default.hbs'
            },
            'metalsmith-feed': {
              collection: 'articles',
              site_url : 'https://grislyeye.com'
            },
            'metalsmith-open-graph': {
              siteurl: 'https://grislyeye.com',
              title: '#title',
              description: '.description',
              image: '.og-image'
            },
            "metalsmith-redirect": {
              "frontmatter": true
            }
          }
        }
      }
    },

    htmllint: {
      all: ['dist/*.html']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-npmcopy');
  grunt.loadNpmTasks('grunt-metalsmith');
  grunt.loadNpmTasks('grunt-html');

  grunt.registerTask('test', ['htmllint'])
  grunt.registerTask('build', ['metalsmith:blog', 'copy', 'less', 'cssmin', 'imagemin', 'npmcopy']);
  grunt.registerTask('default', ['build', 'test']);
  grunt.registerTask('run', ['clean', 'build', 'connect', 'watch']);
};
