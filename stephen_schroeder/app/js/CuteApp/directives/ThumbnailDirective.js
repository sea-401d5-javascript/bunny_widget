module.exports = function(app) {
  app.directive('thumbnailDirective', function() {
    return {
      templateUrl: './templates/CuteApp/thumbnail.html',
      scope: {
        animal: '=',
        image: '='
      }
    };
  });
};