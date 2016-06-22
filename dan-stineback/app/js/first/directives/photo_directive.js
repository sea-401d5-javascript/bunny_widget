'use strict';
module.exports = function(app){
  app.directive('photoDirective', function(){
    return{
      restrict: 'AEC',
      templateUrl: './templates/firstApp/photo.html',
      scope: {
        url: '=',
        height: '=',
        width: '=',
        title: '=',
        description: '='
      },
      controller: function($scope) {
        $scope.photos = [];
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

        $scope.addPhoto = function(title, url) {
          $scope.photos.push({title, url});
        };
      }
    };
  });
};
