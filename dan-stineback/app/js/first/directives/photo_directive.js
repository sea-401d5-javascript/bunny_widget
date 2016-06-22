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
        description: '='

      },
      controller: function($scope) {
        $scope.changeView = function() {
          console.log($scope.mode);
        };

        $scope.showPhoto = function(photo) {
          if (!photo) {
            $scope.mode = 'list';
            return;
          }
          $scope.currentPhoto = photo;
          $scope.mode = 'single';
        };

      }
    };
  });
};
