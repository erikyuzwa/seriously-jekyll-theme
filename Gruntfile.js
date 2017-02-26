
'use strict';

module.exports = function (grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Automatically load required Grunt tasks
  require('jit-grunt')(grunt, {
  });

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Empties folders to start fresh
    clean: {
      site: {
        files: [{
          dot: true,
          src: [
            '_site/**/*'
          ]
        }]
      },
      styles: {
        files: [{
          dot: true,
          src: [
            'css/**/*',
            'js/bootstrap/**/*',
            '!css/main.scss'
          ]
        }]
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {

      bsjs: {
        files: [{
          expand: true,
          dot: true,
          cwd: 'bower_components',
          dest: 'js',
          src: ['bootstrap/dist/js/bootstrap.min.js']
        }]
      },

      bscss: {
        files: [{
          expand: true,
          dot: true,
          cwd: 'bower_components',
          dest: 'css',
          src: ['bootstrap/dist/css/**/*', 'bootstrap/dist/fonts/**/*']
        }]
      },

      fa: {
        files: [{
          expand: true,
          dot: true,
          cwd: 'bower_components',
          dest: 'css',
          src: ['font-awesome/css/**/*', 'font-awesome/fonts/**/*']
        }]
      }

    }

  });

  grunt.registerTask('default', [
    'clean:site',
    'clean:styles',
    'copy:bscss',
    'copy:bsjs',
    'copy:fa'
  ]);
};
