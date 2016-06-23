'use strict';
module.exports = function(app){
  app.directive('photoAlbum', function(){
    return{
      restrict: 'AEC',
      templateUrl: './templates/firstApp/photo.html',
      scope: {
        photos: '=',
        url: '=',
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
        // $scope.currentPhoto = $scope.photos;
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
