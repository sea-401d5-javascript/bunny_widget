module.exports = function(app) {
  app.directive('fullDirective', function() {
    return {
      templateUrl: './templates/CuteApp/full.html',
      scope: {
        animal: '=',
        image: '='
      }
    };
  });
};
