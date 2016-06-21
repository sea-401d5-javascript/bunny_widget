module.exports = function(app) {
  app.controller('ImageController', ['$scope', function() {
    this.url = 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg';
    this.height = 342;
    this.width = 511;
    this.title = 'Bunny';
    this.description = 'A super cute bunny!';
  }]);
};
