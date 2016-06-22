module.exports = function(app) {
  app.directive('thumbnailDirective', function() {
    return {
      restrict: 'E',
      templateUrl: './templates/CuteApp/thumbnail.html',
      scope: {
        url: '@',
        description: '@'
      }
    };
  });
};
