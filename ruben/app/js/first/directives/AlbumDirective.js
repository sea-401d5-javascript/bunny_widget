module.exports = function(app) {
  app.directive('albumDirective', function() {
    return {
      restrict: 'E',
      templateUrl: './templates/album.html',
      scope: {
        photos: '=',
        title: '=',
        description: '='
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
