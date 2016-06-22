module.exports = function(app) {
  app.directive('photoDirective', function() {
    return {
      restrict: 'AEC',
      templateUrl: './templates/AlbumApp/photo.html',
      scope: {
        url: '='
      }
    };
  });
};
