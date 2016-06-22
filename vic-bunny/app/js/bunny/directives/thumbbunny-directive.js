module.exports = function(app) {
  app.directive('thumbBunny', function() {
    return {
      templateUrl:
      './templates/bunny/thumbbunny-directive.html',
      restrict: 'E',
      scope: {
        title: '@',
        link: '@',
        height: '@100',
        width: '@100',
        description: '@'
      }
    };
  });
};
