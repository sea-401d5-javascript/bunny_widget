module.exports= function(app) {
  app.directive('fullSizeDirective', () => {
    return {
      templateUrl: './templates/fullSize.html',
      scope: {
        url: '=',
        alt:'='
      }
    };
  });
};
