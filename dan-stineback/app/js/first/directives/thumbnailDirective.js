'use strict';
module.exports = function(app){
  app.directive('thumbnailDisplay', function(){
    return{
      restrict: 'AEC',
      templateUrl: './templates/firstApp/thumbnail.html',
      scope: {
        url: '=',
        height: '=',
        width: '=',
        title: '=',
        description: '='
      }
    };
  });
};
