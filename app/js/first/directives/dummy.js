module.exports = function(app) {
  app.directive('dummy', function() {
    return {
      templateUrl: './templates/first/dummy.html',
      scope: {
        thing: '='
      },
      replace: true
    };
  });
};
