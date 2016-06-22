module.exports = function(app) {
  app.directive('photoAlbumDirective', function() {
    return {
      restrict: 'E',
      templateUrl: './templates/CuteApp/album.html',
      scope: {
        images: '@',
        title: '@',
        description: '@'
      }
    };
  });
};