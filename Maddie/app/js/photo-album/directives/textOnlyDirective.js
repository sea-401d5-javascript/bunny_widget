module.exports = function(app) {
  app.directive('textOnlyDirective', () => {
    return {
      restrict: 'E',
      templateUrl:'./templates/textOnly.html',
      scope: {
        url: '@',
        title: '@',
        description: '@'
      }
    };
  });
};
