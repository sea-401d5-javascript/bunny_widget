module.exports = function(app) {
  app.controller('BunnyController', ['$scope', function() {
    this.url = 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg';
    this.title = 'Cute Bunny';
    this.desc = 'This is a little bunny that we found in our backyard. We named her Kiki.';
  }]);
};
