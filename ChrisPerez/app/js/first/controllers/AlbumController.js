module.exports = function(app) {
  app.controller('AlbumController', AlbumController);
};

function AlbumController(){
  this.goatPics = {
    title: 'Baby Goats!',
    description: 'Pictures of adorable kids.',
    album: [
      {
        title: 'First Goat',
        alt: 'A little goat sticking its tongue out',
        src: 'https://s-media-cache-ak0.pinimg.com/736x/44/91/31/449131cabd0f6c51259cf881355368a1.jpg'
      },
      {
        title: 'Second Goat',
        alt: 'A little goat in a sweater',
        src: 'https://img.buzzfeed.com/buzzfeed-static/static/2016-04/16/11/campaign_images/webdr15/these-baby-goats-in-tiny-sweaters-will-make-2-28993-1460819049-5_dblbig.jpg'
      },
      {
        title: 'Third Goat',
        alt: 'A little goat jumping in some grass',
        src: 'https://i.ytimg.com/vi/QL6Ws4i07is/hqdefault.jpg'
      }
    ]
  };
  this.bearPics = {
    title: 'Baby Bears!',
    description: 'Pictures of adorable kids.',
    album: [
      {
        title: 'First Bear',
        alt: 'Little bears doing kung foo',
        src: 'http://www.wildnatureimages.com/images%202/050612-100..jpg'
      },
      {
        title: 'Second Bear',
        alt: 'A little bear with a teddy bear',
        src: 'http://www.tehcute.com/pics/201110/bear-cub-playing-with-teddy-bear-big.jpg'
      },
      {
        title: 'Third Bear',
        alt: 'A little bear eating an orange',
        src: 'https://i.ytimg.com/vi/WknqFHdMXIA/maxresdefault.jpg'
      }
    ]
  };
  this.monkeyPics = {
    title: 'Baby Monkeys!',
    description: 'Pictures of adorable kids.',
    album: [
      {
        title: 'First Monkey',
        alt: 'A little monkey on some grass',
        src: 'https://i.imgur.com/IRvJ85O.jpg'
      },
      {
        title: 'Second Monkey',
        alt: 'A little monkey getting bathed',
        src: 'https://i.ytimg.com/vi/M1Eh6ulmeJ0/hqdefault.jpg'
      },
      {
        title: 'Third Monkey',
        alt: 'A little monkey riding on a pig',
        src: 'http://alltaskstraducoes.com.br/vdisk/27/baby-monkey-riding-on-a-pig-lyrics-i6.jpg'
      }
    ]
  };
}
