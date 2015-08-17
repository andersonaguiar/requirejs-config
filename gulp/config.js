'use strict';

// paths map
var path = {
  src:  'app',
  dest: 'build'
};

// set configs for plugins
global['config'] = module.exports = {
  src:  path.src,
  dest: path.dest,
  tests: {
    src: path.src + '/js/tests/**/*'
  },
  zip: {
    name: 'build.zip',
    src:  path.dest + '/**/*',
    dest: './'
  },
  esformatter: {
    src:  path.src + '/js/**/*',
    dest: path.src + '/js'
  },
  js: {
    src:  path.src + '/assets/js/**/*.js',
    dest: path.dest + '/assets/js'
  },
  browserSync: {
    server: { baseDir: path.dest }
  },
  images: {
    src:  path.src + '/images/**',
    dest: path.dest + '/assets/images'
  },
  markup: {
    src:  path.src + '/**/*.html',
    dest: path.dest
  },
  compass: {
    src:  path.src + '/sass',
    dest: path.dest + '/assets/css'
  },
  scssLint: {
    conf: path.src + '/../scss-lint.yml'
  },
  preprocessor: {
    choice: 'stylus', //sass or stylus
    src:    path.src + '/stylus/**/*.styl', //dir of sass or stylus
    dest:   path.dest + '/assets/css' //dir of css dest
  },

  require: {
    dest: path.dest + '/js',
    map: [
      {
        src: [
          './app/assets/js/require/modules.js',
          './app/assets/js/require/config.js',
          './app/assets/js/require/main.js'
        ],
        file: 'main.min.js'
      },
      {
        src: [
          './app/assets/js/general.js',
          './app/assets/js/header/header.js',
          './app/assets/js/footer/footer.js'
        ],
        file: 'general.min.js'
      },
      {
        src: [
          './app/assets/js/home/home.js'
        ],
        file: 'home.min.js'
      },
      {
        src: [
          './app/assets/js/cart/cart.js'
        ],
        file: 'cart.min.js'
      }

    ]
  }
};
