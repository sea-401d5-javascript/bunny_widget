module.exports = function(app) {
  app.controller('bunnyController', ['$scope', function() {
    this.title = 'Cute Bunny',
    this.image = 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg',
    this.height = 400,
    this.width = 400,
    this.description = 'Mr. Fluffington is ready for his salad.';
  }]);
};
