module.exports = function(app) {
  app.controller('FirstController', ['$scope', function() {
    this.bunny = {
      url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg',
      title: 'Bunny',
      description: 'This is a picture of a bunny. Neat, right?',
      height: 400,
      width: 400
    };
  }]);
};
