module.exports = function(app) {
  app.directive('fullDirective', function() {
    return {
      templateUrl: './templates/FirstApp/FullTemplate.html',
      restrict: 'E',
      scope: {
        pic:'='
      },
      controller: function($scope){
        console.log($scope);
      },
      link: function($scope, elem, attr, controller){
        $scope.logController = function(){
          console.log(controller);
        };
        $scope.zoom = controller.zoom;
      },
      require: '^albumDirective'
    };
  });
};
