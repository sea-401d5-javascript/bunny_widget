module.exports = function(app) {
  app.directive('photoAlbumDirective', function() {
    return {
      restrict: 'E',
      templateUrl: './templates/CuteApp/album.html',
      scope: {
        images: '@',
        title: '@',
        description: '@'
      }
      link: function($scope, ele, attr) {
        ele.bind('click', function() {
          
        })
      }
    };
  });
};
