'use strict';

module.exports = function(app) {
  app.controller('ButtSnifferController', ['$scope', function() {
    this.url = 'http://www.wagandtrain.com/wp-content/plugins/image-shadow/cache/800d8ab9cf449d827c7d4d4a24ae0cc8.jpg';
    this.height = 400;
    this.width = 400;
    this.title =  'Butt Sniffer';
    this.description = 'Look at this crazy butt sniffer, how did he get there?';
  }]);
};
