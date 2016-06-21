module.exports = function(app) {
  app.directive('firstDirective', function() {
    return {
      restrict: 'AEC',
      templateUrl: './templates/BunnyApp/first.html',
      scope: {
        title: '@',
        url: '@',
        desc: '@'
      }
    };
  });
};
