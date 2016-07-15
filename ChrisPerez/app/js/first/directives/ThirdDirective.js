module.exports = function(app) {
  app.directive('thirdDirective', function() {
    return {
      //template: '<h1>First Directive</h1>'
      templateUrl: './templates/FirstApp/ThirdTemplate.html',
      restrict: 'E',
      // transclude: true,
      scope: {
        title: '@',
        description: '@',
        url: '@',
        height: '@',
        width: '@'
      }
    };
  });
};
