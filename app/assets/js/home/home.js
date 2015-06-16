define(
  'home', [],
  function () {
    'use strict';

    var Home = function() {
      document.querySelector('h1').innerHTML = '/#!/home';
    }

    return new Home;
});
