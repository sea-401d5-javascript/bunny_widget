module.exports = function(app) {
  app.directive('SmallDirective', function() {
    return {
      restrict: 'E',
      templateUrl: './templates/small-image.html',
      scope: {
        title: '@',
        url: '@',
        height: '@100',
        width: '@100',
        description: '@'
      }
    };
  });
};
