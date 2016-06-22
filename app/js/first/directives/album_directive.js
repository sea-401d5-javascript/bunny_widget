module.exports = function(app) {
  app.directive('photoAlbum', function() {
    return {
      restrict: 'E',
      templateUrl: './templates/first/albums.html',
      scope: {
        photos: '='
      }
    };
  });
};
