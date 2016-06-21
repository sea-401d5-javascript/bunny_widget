'use strict';

module.exports = function(app) {
  app.directive('description_directive', function() {
    return {
      templateUrl: './templates/bunny_widget/description.html',
      restrict: 'AEC',
      scope: {
        title: '@',
        description: '@',
        url: '@'
      }
    };

  });
};
