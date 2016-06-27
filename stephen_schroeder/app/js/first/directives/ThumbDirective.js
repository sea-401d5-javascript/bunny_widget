module.exports = function(app) {
  app.directive('thumbDirective', function() {
    return {
      restrict: 'E',
      templateUrl: './templates/bunny_widget/thumb.html',
      scope: {
        url: '@',
        description: '@'
      }
    };
  });
};
