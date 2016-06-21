module.exports = function(app) {
  app.directive('secondDirective', function() {
    return {
      restrict: 'AEC',
      templateUrl: './templates/BunnyApp/second.html',
      scope: {
        title: '@',
        url: '@',
        desc: '@'
      }
    };
  });
};
