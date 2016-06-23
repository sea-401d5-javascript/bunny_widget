module.exports = function(app) {
  app.directive('thumbnail', function() {
    return {
      templateUrl: './template/album/thumb.html',
      scope: {
        img: '='
      }
    };
  });
};
