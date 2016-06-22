module.exports = function(app) {
  app.controller('ImageController', ['$scope', function() {

    this.sloths = {};
    this.sloths.title = 'Sloths';
    this.sloths.description = 'The slowest and the cutest';
    this.sloths.images = [];

    this.redPandas = {};
    this.redPandas.title = 'Red Pandas';
    this.redPandas.description = 'Like pandas, but cuter.';
    this.redPandas.images = [];

    this.kittens = {};
    this.kittens.title = 'Kittens';
    this.kittens .description = 'Nothing needs to be said.';
    this.kittens.images = [];
  }]);
};
