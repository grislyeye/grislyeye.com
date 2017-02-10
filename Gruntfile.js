module.exports = function (grunt) {
  'use strict';

  var stylelintConfig = {
    "rules": {
      "block-no-empty": true,
      "color-no-invalid-hex": true,
      "declaration-colon-space-after": "always",
      "declaration-colon-space-before": "never",
      "function-comma-space-after": "always",
      "function-url-quotes": "double",
      "media-feature-colon-space-after": "always",
      "media-feature-colon-space-before": "never",
      "media-feature-name-no-vendor-prefix": true,
      "max-empty-lines": 5,
      "number-leading-zero": "never",
      "number-no-trailing-zeros": true,
      "property-no-vendor-prefix": true,
      "declaration-block-trailing-semicolon": true,
      "selector-list-comma-space-before": "never",
      "selector-list-comma-newline-after": "always",
      "selector-no-id": true,
      "string-quotes": "double",
      "value-no-vendor-prefix": true
    }
  }

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
        tasks: ['shell:metalsmith']
      },
      sass: {
        files: ['main.scss', 'assets/styles/**'],
        tasks: ['sass', 'cssmin']
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

    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'dist/main.css': 'main.scss'
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
          'font-awesome/fonts': 'font-awesome/fonts'
        }
      }
    },

    postcss: {
      options: {
        processors: [
          require('stylelint')(stylelintConfig)
        ]
      },
      dist: {
        src: 'assets/styles/*.scss'
      }
    },

    html5validate: {
      src: 'dist/*.html'
    },

    shell: {
      metalsmith: {
        command: "metalsmith"
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-npmcopy');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', ['shell:metalsmith', 'postcss', 'copy', 'sass', 'cssmin', 'imagemin', 'npmcopy']);
  grunt.registerTask('run', ['clean', 'default', 'connect', 'watch']);
};
