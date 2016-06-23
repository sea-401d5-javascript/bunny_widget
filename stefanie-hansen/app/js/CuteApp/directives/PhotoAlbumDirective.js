module.exports = function(app) {
  app.directive('photoAlbumDirective', function() {
    return {
      templateUrl: './templates/CuteApp/album.html',
      scope: {
        animal: '='
      },
      controller: function($scope) {
        $scope.changeView = function() {
          $scope.mode === 'thumbnails' ? $scope.mode === 'descriptions' : $scope.mode === 'thumbnails';
        };
        $scope.enlargeImage = function() {
          console.log('clicked');
          $scope.mode === 'active' ? $scope.mode === 'inactive' : $scope.mode === 'active';
        };
      }
    };
  });
};
