module.exports = function(app) {
  app.directive('full', function() {
    return {
      templateUrl: './template/album/full.html',
      scope: {
        img: '=',
        currentImg: '=',
      }
    };
  });
};
