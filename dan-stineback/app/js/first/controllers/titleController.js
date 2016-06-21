'use strict';
module.exports = function(app) {
  app.controller('titleController', ['$scope', function() {
    this.title = 'Bunny Picture';
    this.url = 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg';
    this.description = 'Cute picture of a bunny.';
  }]);
};
