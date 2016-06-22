module.exports = function(app) {
  app.directive('photoAlbumDirective', function() {
    return {
      restrict: 'E',
      templateUrl: './templates/BunnyApp/album.html',
      scope: {
        images: '@'
      }
    };
  });
};
