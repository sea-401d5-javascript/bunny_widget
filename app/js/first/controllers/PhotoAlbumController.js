'use strict';

module.exports = function(app) {
  app.controller('PhotoAlbumController', PhotoAlbumController);
};

function PhotoAlbumController() {
  this.model = {};
  this.sugarGliders = {
    title: 'Sugar Gliders Album All The Way!!',
    description: 'Damn these gliders sure are nasty :)',
    album: [
      {
        url: 'http://f.tqn.com/y/exoticpets/1/W/R/Q/1/96747320-crop.jpg',
        title: 'Chillin on some wood, no glide mode'
      },
      {
        url: 'http://www.rkpuppiesandmore.com/smallpets/sugarglider.jpg',
        title: 'Ridin that I dont know what, but supermanning that surface'
      },
      {
        url: 'http://rainforestreports.weebly.com/uploads/1/5/5/7/15578800/8932099_orig.jpg',
        title: 'Swoopin in on yall'
      }
    ]
  };
}
