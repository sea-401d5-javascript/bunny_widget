module.exports = function(app) {
  app.directive('noBunnyImage', function() {
    return {
      restrict: 'E',
      templateUrl: './template/bunny/full_bunny.html',
      scope: {
        title: '@',
        image: '@',
        height: '@',
        width: '@',
        description: '@'
      }
    };
  });
};
