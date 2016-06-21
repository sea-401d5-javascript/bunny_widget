module.exports = function(app) {
  app.directive('tinyImageDirective', function() {
    return {
      restrict: 'E',
      templateUrl: './templates/first/tiny_image_template.html',
      scope: {
        title: '@',
        url: '@',
        height: '@100',
        width: '@100',
        description: '@'
      }
    };
  });
};
