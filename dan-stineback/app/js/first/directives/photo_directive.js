'use strict';
module.exports = function(app){
  app.directive('imageDisplay', function(){
    return{
      restrict: 'AEC',
      templateUrl: './templates/firstApp/photo.html',
      scope: {
        url: '@',
        height: '@',
        width: '@',
        title: '@',
        description: '@',
      }
    };
  });
};
