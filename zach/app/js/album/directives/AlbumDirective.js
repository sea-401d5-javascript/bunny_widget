module.exports = function(app) {
  app.directive('albumDirective', function() {
    return {
      restrict: 'AEC',
      templateUrl: './templates/AlbumApp/album.html',
      scope: {
        photos: '=',
        title: '=',
        desc: '=',
        mode: '='
      },
      controller: function($scope) {
        $scope.changeView = function() {
          console.log($scope.mode);
        };
        $scope.showPhoto = function(photo) {
          if (!photo) {
            $scope.mode = 'photos';
            return;
          }
          $scope.currentphoto = photo;
          $scope.mode = 'single';
        };
      }
    };
  });
};
