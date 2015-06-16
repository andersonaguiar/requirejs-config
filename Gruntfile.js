module.exports = function(grunt){
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({
    concat: {
      basic_and_extras: {
        files: {
          // main
          'build/js/main.js' :
          [
            'app/assets/js/require/modules.js',
            'app/assets/js/require/config.js',
            'app/assets/js/require/main.js'
          ],
          // general
          'build/js/general.js' :
          [
            'app/assets/js/general.js',
            'app/assets/js/header/header.js',
            'app/assets/js/footer/footer.js'
          ],
          // home
          'build/js/home/home.js' :
          [
            'app/assets/js/home/home.js'
          ],
          // cart
          'build/js/cart/cart.js' :
          [
            'app/assets/js/cart/cart.js'
          ]
        }
      }
    },

    uglify: {
      task: {
        options: {
          report    : 'gzip',
          compress  : true,
          mangle    : true,
          sourceMap : false
        },

        files: {
          'build/js/general.js': ['build/js/general.js'],
          'build/js/main.js': ['build/js/main.js'],
          'build/js/home/home.js': ['build/js/home/home.js'],
          'build/js/cart/cart.js': ['build/js/cart/cart.js']
        }
      }
    }
  });

  grunt.registerTask('default', ['concat', 'uglify']);
}
