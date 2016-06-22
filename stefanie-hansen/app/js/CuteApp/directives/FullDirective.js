module.exports = function(app) {
  app.directive('fullDirective', function() {
    return {
      restrict: 'E',
      templateUrl: './templates/CuteApp/full.html',
      scope: {
        title: '@',
        url: '@',
        description: '@'
      }
    };
  });
};
