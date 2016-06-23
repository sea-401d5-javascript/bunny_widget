module.exports = function(app) {
  app.directive('fullDirective', function() {
    return {
      restrict: 'E',
      templateUrl: './templates/full-image.html',
      scope: {
        title: '=',
        url: '=',
        description: '='
      }
    };
  });
};
