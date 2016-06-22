module.exports = function(app) {
  app.directive('fullDirective', function() {
    return {
      restrict: 'E',
      templateUrl: './templates/bunny_widget/full.html',
      scope: {
        title: '@',
        url: '@',
        description: '@'
      }
    };
  });
};
