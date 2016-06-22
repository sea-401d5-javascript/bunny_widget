module.exports = function(app) {
  app.directive('photoAlbum', function() {
    return {
      restrict: 'E',
      templateUrl: './templates/first/albums.html',
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
        $scope.toggle = function($event, image) {
          // let foo = $event.currentTarget;
          // if ($event.currentTarget != $event.currentTarget) {
          //   $scope.photoText = false;
          // } else {
          $scope.photoText = !$scope.photoText;
          $scope.photoTextAgain = !$scope.photoTextAgain;


        };
      }
    };
  });
};
