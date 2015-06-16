define(
  'cart', [],
  function () {
    'use strict';

    var Cart = function() {
      document.querySelector('h1').innerHTML = '/#!/cart';
    }

    return new Cart;
});
