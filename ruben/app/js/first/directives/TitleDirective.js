module.exports = function(app) {
  app.directive('titleDirective', function() {
    return {
      restrict: 'E',
      templateUrl: './templates/title-image.html',
      scope: {
        title: '@',
        url: '@',
        description: '@'
      }
    };
  });
};
