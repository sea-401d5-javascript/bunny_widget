module.exports = function(app) {
  app.directive('noBunny', function() {
    return {
      templateUrl:
      './templates/bunny/nobunny-directive.html',
      restrict: 'E',
      scope: {
        title: '@',
        link: '@',
        description: '@'
      }
    };
  });
};
