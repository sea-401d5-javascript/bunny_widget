module.exports = function(app) {
  app.directive('thumbSize', function() {
    return {
      templateUrl:
      './templates/photoalbum/thumbsize-directive.html',
      restrict: 'E',
      scope: {
        url: '=',
        alt: '='
      }
    };
  });
};
