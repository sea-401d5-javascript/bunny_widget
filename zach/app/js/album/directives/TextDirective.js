module.exports = function(app) {
  app.directive('textDirective', function() {
    return {
      restrict: 'AEC',
      templateUrl: './templates/AlbumApp/text.html',
      scope: {
        url: '=',
        title: '='
      }
    };
  });
};
