'use strict';

module.exports = function(app) {
  app.controller('ImageController', ['$scope', function() {
    this.url = 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg';
    this.height = 400;
    this.width = 400;
    this.title = 'Cute Fluffy Bunny';
    this.description = 'This is a cute fluffy bunny. Small with long whiskers. Who knows what could be hiding behind those beady eyes?';
  }]);
};
