'use strict';
module.exports = function(app) {
  app.directive('titleDirective', function() {
    return {
      templateUrl: './templates/firstApp/bunnyApp.html',
      restrict: 'AEC',
      scope: {
        title: '=',
        description: '=',
        url: '='
      }
    };

  });
};
