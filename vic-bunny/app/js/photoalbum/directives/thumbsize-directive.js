module.exports = function(app) {
  app.directive('thumbSize', function() {
    return {
      templateUrl:
      './templates/photoalbum/thumbsize-directive.html',
      restrict: 'E',
      scope: {
        title: '@',
        link: '@',
        height: '@100',
        width: '@100',
        description: '@'
      }
    };
  });
};
