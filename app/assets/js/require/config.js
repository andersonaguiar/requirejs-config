var dataRequire = document.querySelector('body').dataset.require,
         config = {paths: {}, shim: {}};

// if you want, you can set your shim here, like this:
config.shim = {
  jquery: {
    exports: '$'
  },
  underscore: {
    exports: '_'
  },
  backbone: {
    deps: [
      'underscore',
      'jquery'
    ],
    exports: 'Backbone'
  }
};

config.loadModules = function () {
  // get modules[] && set config.paths{}
  for (i in modules) {
    this.paths[modules[i].module] = modules[i].path;
  }

  // set requirejs config
  require.config(this);

  if (dataRequire) {
    // get data-require && require it
    for (i in modules) {
      if (dataRequire.trim() === modules[i].require) {
        require([modules[i].module]);
      }
    }
  }
}
