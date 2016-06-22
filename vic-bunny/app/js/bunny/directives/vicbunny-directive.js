module.exports = function(app) {
  app.directive('vicBunny', function() {
    return {
      templateUrl:
      './templates/bunny/vicbunny-directive.html',
      restrict: 'E',
      scope: {
        title: '@',
        link: '@',
        height: '@',
        width: '@',
        description: '@'
      }
    };
  });
};
