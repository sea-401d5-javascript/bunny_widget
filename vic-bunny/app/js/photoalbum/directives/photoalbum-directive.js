module.exports = function(app) {
  app.directive('photoAlbum', function() {
    return {
      templateUrl:
      './templates/photoalbum/photoalbum-directive.html',
      restrict: 'E',
      scope: {
        title: '=',
        link: '=',
        description: '='
      }
    };
  });
};
