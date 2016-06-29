module.exports = function(app) {
  app.directive('fullBunnyImage', function() {
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
