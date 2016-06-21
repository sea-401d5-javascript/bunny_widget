module.exports = function(app) {
  app.directive('descriptionDirective', function() {
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
