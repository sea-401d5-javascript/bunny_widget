module.exports = function(app) {
  app.directive('photoAlbumDirective', function() {
    return {
      templateUrl: './templates/photoAlbum.html',
      scope: {
        photos: '=',
        title: '@',
        description: '@'
      },
      controller: function($scope) {
        $scope.mode = 'table';
        $scope.changeView = function() {
          console.log($scope.mode);
        };
        $scope.fullSize = function(photo) {
          //$scope.mode != 'table';
          if(!photo) {
            $scope.mode = 'grid';
            return;
          }
          $scope.currentPhoto = photo;
          $scope.mode= 'single';
        };
      }
    };
  });
};
