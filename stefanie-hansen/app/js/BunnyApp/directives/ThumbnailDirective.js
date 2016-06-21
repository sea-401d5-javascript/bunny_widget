module.exports = function(app) {
  app.directive('thumbnailDirective', function() {
    return {
      restrict: 'E',
      templateUrl: './templates/BunnyApp/thumbnail.html',
      scope: {
        url: '@',
        width: '@',
        description: '@'
      }
    };
  });
};
