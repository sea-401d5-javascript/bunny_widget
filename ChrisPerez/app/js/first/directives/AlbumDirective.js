module.exports = function(app) {
  app.directive('albumDirective', function() {
    return {
      templateUrl: './templates/FirstApp/AlbumTemplate.html',
      scope: {
        title: '=',
        description: '=',
        album: '='
      },
      controller: function($scope){
        //$scope.album = [];
        $scope.changeView = function($scope){
          console.log($scope.mode);
        };

      }
    };
  });
};
