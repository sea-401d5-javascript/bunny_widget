module.exports = function(app) {
  app.directive('AlbumDirective', function() {
    return {
      templateUrl: './templates/FirstApp/album.html',
      scope: {},
      controller: function($scope){
        //console.log($scope);
        $scope.album = [];
        $scope.changeView = function(){
          console.log($scope.mode);
        };

        $scope.showArticle = function(note){
          if (!note) {
            $scope.mode = 'list';
            return;
          }
          $scope.currentNote = note;
          $scope.mode = 'single';
        };

        $scope.addNote = function(title, body){
          $scope.notes.push({title, body});
        };
      }
    };
  });
};
