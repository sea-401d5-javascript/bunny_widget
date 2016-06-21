module.exports= function(app) {
  app.directive('fullSizeDirective', () => {
    return {
      restrict: 'E',
      templateUrl: './templates/fullSize.html',
      scope: {
        url: '@',
        height: '@',
        width: '@',
        title: '@',
        description: '@'
      }
    };
  });
};
