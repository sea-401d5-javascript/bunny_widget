module.exports = function(app) {
  app.directive('FirstDirective', function() {
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
