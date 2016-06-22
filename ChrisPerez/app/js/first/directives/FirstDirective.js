module.exports = function(app) {
  app.directive('firstDirective', function() {
    return {
      templateUrl: './templates/FirstApp/FirstTemplate.html',
      restrict: 'E',
      // transclude: true,
      scope: {
        title: '@',
        description: '@',
        url: '@'
      }
    };

  });
};
