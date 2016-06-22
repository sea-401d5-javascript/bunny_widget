module.exports = function(app) {
  app.controller('FirstController', ['$scope', function() {
    this.url = 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg';
    this.title = 'Bunny';
    this.description = 'This is a picture of a bunny. Neat, right?';
    this.height = 400;
    this.width = 400;
  }]);
};
