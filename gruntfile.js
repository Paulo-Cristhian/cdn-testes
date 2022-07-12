module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.initConfig({
    concat: {
      basic: {
        src: [
          'assets/**/**/*.css',
          'assets/**/*.css'
        ],
        dest: 'temp/concat.css'
      },
      extras: {
        src: [
          "assets/**/**/*.js",
          "assets/**/*.js"
        ],
        dest: "objetivo.js"
      }
    },
    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'objetivo.css': ['temp/concat.css']
        }
      }
    },
    watch: {
      files: ['assets/**/**/*.css', 'assets/**/*.css', 'assets/**/**/*.js', 'assets/**/*.js'],
      tasks: ['compile']
    }
  });
  grunt.registerTask('compile', [
    'concat',
    'cssmin'
  ]);
};