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
        $scope.changeView = function() {
          console.log($scope.mode);
        };
        $scope.showArticle = function(photo) {
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
