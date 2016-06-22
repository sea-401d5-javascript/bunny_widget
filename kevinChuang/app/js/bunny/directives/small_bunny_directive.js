module.exports = function(app) {
  app.directive('smallBunnyImage', function() {
    return {
      restrict: 'E',
      templateUrl: './template/bunny/small_bunny.html',
      scope: {
        title: '@',
        image: '@',
        description: '@'
      }
    };
  });
};
