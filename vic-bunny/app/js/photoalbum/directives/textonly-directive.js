module.exports = function(app) {
  app.directive('textOnly', function() {
    return {
      templateUrl:
      './templates/photoalbum/textonly-directive.html',
      restrict: 'E',
      scope: {
        title: '@',
        link: '@',
        description: '@'
      }
    };
  });
};
