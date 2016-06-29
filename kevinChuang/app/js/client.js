const angular = require('angular');

var BunnyApp = angular.module('BunnyApp', []);
require('./bunny')(BunnyApp);

var AlbumApp = angular.module('AlbumApp', []);
require('./album')(AlbumApp);
