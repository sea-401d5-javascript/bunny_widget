module.exports = function(app) {
  app.directive('photoAlbumDirective', function() {
    return {
      templateUrl: './templates/CuteApp/album.html',
      scope: {
        redPanda: '=',
        sloth: '=',
        kitten: '='
      },
      controller: function($scope) {
        $scope.changeView = function() {
          $scope.mode === 'thumbnails' ? $scope.mode === 'descriptions' : $scope.mode === 'thumbnails';
        };
      }
    };
  });
};
