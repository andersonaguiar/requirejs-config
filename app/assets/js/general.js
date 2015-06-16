define(
  'general',
  [
    'header',
    'footer'
  ],
  function (Header, Footer) {
    'use strict';

    var General = function() {
      var header = new Header;
      var footer = new Footer;
    }

    return new General;
});
