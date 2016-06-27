module.exports = function(app) {
  app.controller('AlbumController', AlbumController);
};

function AlbumController(){
  this.goatPics = {
    title: 'Baby Goats!',
    description: 'Pictures of adorable kids.',
    album: [
      {
        label: 'First Goat',
        description: 'A little goat sticking its tongue out',
        url: 'https://s-media-cache-ak0.pinimg.com/736x/44/91/31/449131cabd0f6c51259cf881355368a1.jpg',
        width: 100
      },
      {
        label: 'Second Goat',
        description: 'A little goat in a sweater',
        url: 'https://img.buzzfeed.com/buzzfeed-static/static/2016-04/16/11/campaign_images/webdr15/these-baby-goats-in-tiny-sweaters-will-make-2-28993-1460819049-5_dblbig.jpg',
        width: 100
      },
      {
        label: 'Third Goat',
        description: 'A little goat jumping in some grass',
        url: 'https://i.ytimg.com/vi/QL6Ws4i07is/hqdefault.jpg',
        width: 100
      }
    ]
  };
  this.bearPics = {
    title: 'Baby Bears!',
    description: 'Pictures of adorable cubs.',
    album: [
      {
        label: 'First Bear',
        description: 'Little bears doing kung foo',
        url: 'http://www.wildnatureimages.com/images%202/050612-100..jpg',
        width: 100
      },
      {
        label: 'Second Bear',
        description: 'A little bear with a teddy bear',
        url: 'http://www.tehcute.com/pics/201110/bear-cub-playing-with-teddy-bear-big.jpg',
        width: 100
      },
      {
        label: 'Third Bear',
        description: 'A little bear eating an orange',
        url: 'https://i.ytimg.com/vi/WknqFHdMXIA/maxresdefault.jpg',
        width: 100
      }
    ]
  };
  this.monkeyPics = {
    title: 'Baby Monkeys!',
    description: 'Pictures of adorable monklets.',
    album: [
      {
        label: 'First Monkey',
        description: 'A little monkey on some grass',
        url: 'https://i.imgur.com/IRvJ85O.jpg',
        width: 100
      },
      {
        label: 'Second Monkey',
        description: 'A little monkey getting bathed',
        url: 'https://i.ytimg.com/vi/M1Eh6ulmeJ0/hqdefault.jpg',
        width: 100
      },
      {
        label: 'Third Monkey',
        description: 'A little monkey riding on a pig',
        url: 'http://alltaskstraducoes.com.br/vdisk/27/baby-monkey-riding-on-a-pig-lyrics-i6.jpg',
        width: 100
      }
    ]
  };
}
