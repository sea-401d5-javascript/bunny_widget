'use strict';
module.exports = function(app) {
  app.controller('imageController', ['$scope', function() {
    this.url = 'https://static.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg';
    this.height = 400;
    this.width = 400;
    this.title = 'Food';
  }]);
};
