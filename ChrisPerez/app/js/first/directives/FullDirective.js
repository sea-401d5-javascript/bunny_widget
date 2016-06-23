module.exports = function(app) {
  app.directive('fullDirective', function() {
    return {
      templateUrl: './templates/FirstApp/FullTemplate.html',
      restrict: 'E',
      scope: {
        label: '=',
        description: '=',
        url: '='
      }
    };
  });
};
