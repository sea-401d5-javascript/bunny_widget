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
        this.zoom = function(pic){
          console.log('zoom?', pic.width);
          if (pic.width === 100){
            return pic.width = pic.width * 4;
          } else {
            return pic.width = 100;
          }
        };
      }
    };
  });
};
