module.exports = function(app) {
  app.directive('fullSize', function() {
    return {
      templateUrl:
      './templates/photoalbum/fullsize-directive.html',
      restrict: 'E',
      scope: {
        url: '=',
        alt: '='
      }
    };
  });
};
