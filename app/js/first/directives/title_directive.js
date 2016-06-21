module.exports = function(app) {
  app.directive('firstImageDirective', function() {
    return {
      restrict: 'E',
      templateUrl: './templates/first/title_image_template.html',
      scope: {
        title: '@',
        url: '@',
        description: '@'
      }
    };
  });
};
