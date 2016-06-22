'use strict';

module.exports = function(app) {
  app.controller('ImageController', ['$scope', function() {
    this.url = 'http://exnba.com/wp-content/uploads/2016/05/kobe-bryant-ball-head.jpg';
    this.height = 400;
    this.width = 400;
    this.title =  'Kobe';
    this.description = 'Take a look at the legend';
  }]);
};
