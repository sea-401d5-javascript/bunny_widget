module.exports = function(app) {
  app.directive('photoAlbumDirective', function() {
    return {
      templateUrl: './templates/photoAlbum.html',
      scope: {
        photos: '=',
        title: '@',
        description: '@'
      }
      controller: function($scope) {
        $scope.fullSize = function() {
          if()
        }
      }
    };
  });
};
