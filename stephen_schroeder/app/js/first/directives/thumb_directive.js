'use strict';

module.exports = function(app){
  app.directive('thumb_directive', function(){
    return{
      restrict: 'E',
      template: './templates/bunny_widget/thumb.html',
      scope: {
        url: '@',
        height: '@',
        width: '@',
        alt: '@title',
        description: '@'
      }
    };
  });
};
