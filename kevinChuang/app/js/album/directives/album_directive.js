module.exports = function(app) {
  app.directive('album', function() {
    return {
      templateUrl: './template/album/album.html',
      scope: {
        mode: '=',
        imgalbum: '='
      },
      controller: function($scope) {
        $scope.changeView = function(){
          console.log($scope.mode);
        };
      },
      link: function(scope, elem, attr, controller) {
        scope.showImage = function(img) {
          if (!img) {
            scope.mode = 'text';
          }
          controller.currentImg = img;
          controller.mode = 'currentImg';
        };
        scope.closeImage = function() {
          controller.currentImg = '';
          controller.mode = '';
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
