module.exports = function(app) {
  app.directive('photoAlbumDirective', function() {
    return {
      templateUrl: './templates/CuteApp/album.html',
      scope: {
        animal: '=',
        image: '=',
        images: '='
      },
      controller: function($scope) {
        $scope.showFull = false;
        $scope.showThumbnails = true;

        $scope.changeView = function() {
          $scope.mode === 'thumbnails' ? $scope.mode === 'descriptions' : $scope.mode === 'thumbnails';
        };
        $scope.toggleImage = function(image) {
          console.log('clicked');
          $scope.currentImage = image;
          if (!$scope.currentImage) {
            $scope.showFull = !$scope.showFull;
          } else if ($scope.showFull) {
            $scope.showThumbnails = false;
          } else {
            $scope.showThumbnails = true;
          }
        };
      }
    };
  });
};
