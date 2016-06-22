module.exports = function(app) {
  app.directive('noBunnyImage', function() {
    return {
      restrict: 'E',
      templateUrl: './template/bunny/no_bunny.html',
      scope: {
        title: '@',
        image: '@',
        description: '@'
      }
    };
  });
};
