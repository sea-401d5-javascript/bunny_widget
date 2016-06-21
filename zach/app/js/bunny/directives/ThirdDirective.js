module.exports = function(app){
  app.directive('thirdDirective', function() {
    return {
      restrict: 'AEC',
      templateUrl: './templates/BunnyApp/third.html',
      scope: {
        title: '@',
        url: '@',
        desc: '@'
      }
    };
  });
};
