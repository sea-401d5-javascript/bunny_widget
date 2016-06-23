module.exports = function(app) {
  app.directive('photoAlbum', function() {
    return {
      templateUrl:
      './templates/photoalbum/photoalbum-directive.html',
      restrict: 'E',
      scope: {
        title: '@',
        description: '@',
        photos: '='
      },

      controller:function($scope) {
        $scope.changeView = function() {
          console.log($scope.mode);
        };
        
      }
    };
  });
};
