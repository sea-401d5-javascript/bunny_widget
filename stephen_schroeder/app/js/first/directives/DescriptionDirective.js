module.exports = function(app) {
  app.directive('descriptionDirective', function() {
    return {
      restrict: 'E',
      templateUrl: './templates/bunny_widget/description.html',
      scope: {
        title: '@',
        url: '@',
        description: '@'
      }
    };
  });
};
