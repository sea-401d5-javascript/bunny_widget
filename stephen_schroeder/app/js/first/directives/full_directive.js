'use strict';

module.exports = function(app){
  app.directive('full_directive', function(){
    return{
      restrict: 'E',
      template: './templates/bunny_widget/full.html',
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
