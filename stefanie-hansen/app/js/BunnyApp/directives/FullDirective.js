module.exports = function(app) {
  app.directive('fullDirective', function() {
    return {
      restrict: 'E',
      templateUrl: './templates/BunnyApp/full.html',
      scope: {
        title: '@',
        url: '@',
        description: '@'
      }
    };
  });
};
