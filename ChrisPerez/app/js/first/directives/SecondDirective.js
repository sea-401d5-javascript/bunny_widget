module.exports = function(app) {
  app.directive('secondDirective', function() {
    return {
      //template: '<h1>First Directive</h1>'
      templateUrl: './templates/FirstApp/SecondTemplate.html',
      restrict: 'E',
      // transclude: true,
      scope: {
        bunnyImageThumb: '=bunnythumb'
      }
    };

  });
};
