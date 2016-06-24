module.exports = function(app) {
  app.directive('dummy', function() {
    return {
      templateUrl: './templates/dummy.html',
      scope: {
        data: '='
      },
      replace: true
    };
  });
};
