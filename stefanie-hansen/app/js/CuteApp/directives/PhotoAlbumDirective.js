module.exports = function(app) {
  app.directive('photoAlbumDirective', function() {
    return {
      restrict: 'E',
      templateUrl: './templates/CuteApp/album.html',
      scope: {
        images: '@',
        title: '@',
        description: '@'
      },
      link: function($scope, ele) {
        ele.bind('click', function() {
          $scope.mode === 'grid' ? $scope.mode === 'table' : $scope.mode === 'grid';
        });
      }
    };
  });
};
