module.exports = function(app) {
  app.directive('textOnlyDirective', () => {
    return {
      templateUrl:'./templates/textOnly.html',
      scope: {
        title: '@',
        description: '@'
      }
    };
  });
};
