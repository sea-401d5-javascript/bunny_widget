module.exports = function(app) {
  app.directive('smallImageDirective', () => {
    return {
      restrict: 'E',
      templateUrl: './templates/smallImage.html',
      scope: {
        url: '=',
        alt:'='

      }
    };
  });
};
