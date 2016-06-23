'use strict';

module.exports = function(app) {
  app.controller('AlbumController', AlbumController);
};

function AlbumController() {

  this.puppies = {
    title: 'Puppies',
    description: 'Cute lil puppies',
    album: [
      {
        url: 'https://i.ytimg.com/vi/gvfDAcKzCco/maxresdefault.jpg',
        title: 'Puppy kisses',
        textDisplay: false
      },
      {
        url: 'https://v.cdn.vine.co/r/avatars/0AE7ACF5A11145563289124835328_354a079e2d6.0.1.jpg',
        title: 'Whatcha lookin\' at?',
        textDisplay: false
      },
      {
        url: 'https://s-media-cache-ak0.pinimg.com/564x/5e/4d/d6/5e4dd65bf6bbc9ceadec48d7e919c728.jpg',
        title: 'How can you get mad at this face?',
        textDisplay: false
      }
    ]
  };
  this.koalas = {
    title: 'Koalas',
    description: 'Cute lil Koalas',
    album: [
      {
        url: 'http://justcuteanimals.com/wp-content/uploads/2014/09/happy-koala-bear-cute-animal-pictures-pics.jpg',
        title: 'Smily Koala'
      },
      {
        url: 'http://data.whicdn.com/images/11721165/large.jpg',
        title: 'Sleepy Koala'
      },
      {
        url: 'https://s-media-cache-ak0.pinimg.com/236x/ef/42/79/ef4279974281c7c68fa2af4be485976a.jpg',
        title: 'Yawny Koala'
      }
    ]
  };

  this.pandas = {
    title: 'Panda Panda Panda',
    description: 'Cute lil Pandas',
    album: [
      {
        url: 'https://i.ytimg.com/vi/gMRScklkpa4/hqdefault.jpg',
        title: 'Someone change my diaper'
      },
      {
        url: 'https://s-media-cache-ak0.pinimg.com/236x/c2/26/2f/c2262fe2e60678fb14bc75673bd51338.jpg',
        title: 'I\'m gonna lay here as long as possible'
      },
      {
        url: 'https://www.panda.nu/images/fulls/panda1.jpg',
        title: 'Yummy'
      }
    ]
  };
}
