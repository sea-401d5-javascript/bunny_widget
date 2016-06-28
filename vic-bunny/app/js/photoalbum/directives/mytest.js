module.exports = function(app) {
  app.directive('myTest', function() {
    return {
      templateUrl: './templates/photoalbum/mytest.html',
      scope: {
        data: '='
      },
      replace: true
    };
  });
};
