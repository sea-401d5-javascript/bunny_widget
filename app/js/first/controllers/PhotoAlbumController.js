'use strict';

module.exports = function(app) {
  app.controller('PhotoAlbumController', PhotoAlbumController);
};

function PhotoAlbumController() {

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
  this.badPussyCats = {
    title: 'These pussies are super bad!!!',
    description: 'Who let these pussies out?',
    album: [
      {
        url: 'https://s-media-cache-ak0.pinimg.com/236x/d8/10/e4/d810e49915d82f8b281d07f9b0d55cd7.jpg',
        title: 'Damn this pussy is getting locked up'
      },
      {
        url: 'http://1.bp.blogspot.com/_DTGEcBi-w0g/TIg0BOQWHuI/AAAAAAAAAmI/UeFySd1t6Yw/s640/bad-cat3.jpg',
        title: 'Back in da hood pussy'
      },
      {
        url: 'https://secure.static.tumblr.com/468c354df166018752850b504e7a4561/earrb7t/xoLnoany6/tumblr_static_tumblr_static_2rtorf46vu0w4kgc8gowcc4gk_640.jpg',
        title: 'This pussy is far out man'
      }
    ]
  };

  this.superCoolMarineIguanas = {
    title: 'Bet you didnt know about these guys',
    description: 'Marine Iguanas on the rise',
    album: [
      {
        url: 'https://www.quasarex.com/galapagos/media/img/animals/reptiles/iguanas/marine-iguanas_2.jpg',
        title: 'Here he is, front and center'
      },
      {
        url: 'http://ww2.hdnux.com/photos/45/27/47/9796073/4/920x920.jpg',
        title: 'They like to swim'
      },
      {
        url: 'http://yourshot.nationalgeographic.com/u/ss/fQYSUbVfts-T7pS2VP2wnKyN8wxywmXtY0-FwsgxpiuUfORQIJSJ-23I0H_e0r-hPtf9foGX8_K9EEouT8ey/',
        title: 'And spit!'
      }
    ]
  };
}
