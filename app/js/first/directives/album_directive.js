module.exports = function(app) {
  app.directive('photoAlbum', function() {
    return {
      restrict: 'E',
      templateUrl: './templates/first/albums.html',
      scope: {
        photos: '=',
        title: '=',
        description: '=',
        photo: '='
      },
      controller: function($scope) {
        $scope.photoText = false;
        $scope.photoTextAgain = true;
        $scope.changeView = function() {
          console.log($scope.mode);
        };
        $scope.toggle = function(photo) {
          console.log(photo);

          $scope.currentPhoto = photo;
          let photoArray = [];
          photoArray.push(photo);
          console.log(photoArray);

          $scope.photoText = !$scope.photoText;
          $scope.photoTextAgain = !$scope.photoTextAgain;


        };
      }
    };
  });
};
