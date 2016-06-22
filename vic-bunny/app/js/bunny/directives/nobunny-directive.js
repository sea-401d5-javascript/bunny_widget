module.exports = function(app) {
  app.directive('noBunny', function() {
    return {
      templateUrl:
      './templates/bunny/bunny-directive.html',
      restrict: 'E',
      scope: {
        title: '@',
        link: '@',
        description: '@'
      }
    };
  });
};
