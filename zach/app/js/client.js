'use strict';

const angular = require('angular');

var AlbumApp = angular.module('AlbumApp', []);
require('./album')(AlbumApp);
