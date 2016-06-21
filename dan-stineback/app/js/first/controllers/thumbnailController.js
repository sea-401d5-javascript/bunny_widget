'use strict';
module.exports = function(app) {
  app.controller('imageController', ['$scope', function() {
    this.url = 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg';
    this.height = 100;
    this.width = 100;
    this.title = 'Bunny thumbnail';
  }]);
};
