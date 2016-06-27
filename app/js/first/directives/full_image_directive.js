module.exports = function(app) {
  app.directive('fullImageDirective', function() {
    return {
      restrict: 'E',
      templateUrl: './templates/first/full_image_template.html',
      replace: true,
      scope: {
        url: '=',
        title: '=',
        description: '='
      }
    };
  });
};
