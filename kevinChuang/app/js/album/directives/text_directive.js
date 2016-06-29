module.exports = function(app) {
  app.directive('text', function() {
    return {
      templateUrl: './template/album/text.html',
      scope: {
        img: '='
      }
    };
  });
};
