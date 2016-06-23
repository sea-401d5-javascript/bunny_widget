module.exports = function(app) {
  app.directive('albumDirective', function() {
    return {
      templateUrl: './templates/FirstApp/AlbumTemplate.html',
      scope: {
        title: '=',
        description: '=',
        album: '='
      },
      controller: function(){
        //$scope.album = [];
        this.zoom = function(width){
          width = width * 400;
        };
      }
    };
  });
};
