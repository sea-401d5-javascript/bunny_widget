'use strict';

module.exports = function(app) {
  app.controller('BunnyController', ['$scope', function() {
    this.title = 'Vicious Bunny';
    this.height = 400;
    this.width = 400;
    this.description = 'Don\'t get too close or this vicious little monster will attack! This particular species can devour the average man in 13.7 seconds.';
    this.link = 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg';
  }]);
};
