module.exports = function(app) {
  app.directive('album', function() {
    return {
      templateUrl: './template/bunny/album.html',
      scope: {
        size: '=',
        imgalbum: '='
      },
      link: function(scope, elem, attr, controller) {
        scope.showImage = function(img) {
          controller.currentImg = img;
        };
        scope.$watch(function() {
          return controller.currentImg;
        }, function() {
          scope.currentImg = controller.currentImg;
        });
      },
      require: '^ngController'
    };
  });
};
