module.exports = function(app) {
  app.directive('descriptionDirective', function() {
    return {
      restrict: 'E',
      templateUrl: './templates/CuteApp/description.html',
      scope: {
        title: '@',
        url: '@',
        description: '@'
      }
    };
  });
};
