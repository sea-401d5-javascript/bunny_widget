module.exports = function(app) {
  app.directive('fullSizeDirective', function() {
    return {
      restrict: 'E',
      templateUrl: './templates/BunnyApp/description.html',
      scope: {
        title: '@',
        url: '@',
        description: '@'
      }
    };
  });
};
