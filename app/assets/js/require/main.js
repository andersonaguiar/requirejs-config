// load modules
config.loadModules();

require(
  [
    'general'
  ],
  function(General) {
    console.log('General is loaded');
  }
);
