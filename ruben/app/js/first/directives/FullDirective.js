module.exports = function(app) {
  app.directive('FullDirective', function() {
    return {
      restrict: 'E',
      templateUrl: './templates/full-image.html',
      scope: {
        title: '@',
        url: '@',
        description: '@'
      }
    };
  });
};
