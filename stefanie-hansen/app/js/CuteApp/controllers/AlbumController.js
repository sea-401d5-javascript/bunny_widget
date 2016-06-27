module.exports = function(app) {
  app.controller('AlbumController', ['$scope', function() {

    this.sloths = {
      title: 'Sloths',
      description: 'The slowest and the cutest',
      images: ['http://i.imgur.com/yLQVpWg.jpg', 'http://i.imgur.com/vwPNvtT.jpg', 'http://i.imgur.com/PyMOoJn.jpg', 'http://i.imgur.com/p1zI1rv.jpg', 'http://i.imgur.com/0tA76mt.jpg', 'http://i.imgur.com/5AnQqFq.jpg']
    };

    this.redPandas = {
      title: 'Red Pandas',
      description: 'Like pandas, but cuter.',
      images: ['http://i.imgur.com/Bui0wgS.jpg', 'http://i.imgur.com/eziiTe1.jpg', 'http://i.imgur.com/CVsYUNQ.jpg', 'http://i.imgur.com/QuKhUoR.jpg', 'http://i.imgur.com/0YXORaB.jpg', 'http://i.imgur.com/IM5yOVz.jpg', 'http://i.imgur.com/ANsdnaH.jpg']
    };

    this.kittens = {
      title: 'Kittens',
      description: 'Nothing needs to be said.',
      images: ['http://i.imgur.com/ozEaj1Z.png', 'http://i.imgur.com/LBfAioO.jpg', 'http://i.imgur.com/a4ZxA5u.jpg', 'http://i.imgur.com/MLsKJLZ.jpg', 'http://i.imgur.com/EqxkgdR.jpg', 'http://i.imgur.com/KBHvE1c.jpg', 'http://i.imgur.com/si8LnGy.jpg']
    };
  }]);
};
