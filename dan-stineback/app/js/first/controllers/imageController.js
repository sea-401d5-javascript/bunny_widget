'use strict';
module.exports = function(app) {
  app.controller('imageController', ['$scope', function() {
    this.url = 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg';
    this.height = 400;
    this.width = 400;
    this.title = 'Bunny Picture';
    this.description = 'A Cute picture of a bunny.';
    this.big = 'A BIG Cute Bunny Picture';

  }]);
};
