module.exports = function(app) {
  app.directive('textDirective', function() {
    return {
      templateUrl: './templates/FirstApp/TextTemplate.html',
      restrict: 'E',
      scope: {
        label: '=',
        description: '=',
        url: '='
      }
    };
  });
};
