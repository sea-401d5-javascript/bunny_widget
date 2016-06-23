module.exports = function(app) {
  app.directive('smallDirective', function() {
    return {
      restrict: 'E',
      templateUrl: './templates/small-image.html',
      scope: {
        title: '=',
        url: '=',
        description: '='
      }
    };
  });
};
