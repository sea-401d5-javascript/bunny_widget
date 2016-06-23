'use strict';

module.exports = function(app) {
  app.controller('PhotoAlbumController', PhotoAlbumController);

  function PhotoAlbumController() {
    this.weimeraners = {
      title: 'Weimeraner Puppies Photo Album',
      description: 'Weimeraners are adorable!',
      photos: [
        {
          url:'https://www.greenfieldpuppies.com/wp-content/plugins/gfp/images/big/pup_x_1371865636_0.jpg',
          alt:'Adorable Weimeraner 1'
        },
        {
          url:'http://tracieblue.com/last_litter/Blue%20Weimaraner%20Puppy%20Pink%201.jpg',
          alt:'Adorable Weimeraner 2'
        },
        {
          url:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTJxJ1p4MBzwQBU6h3GFmieJOdfydtFhymksj4mCnE0FJwAij33rA',
          alt:'Adorable Weimeraner 3'
        }
      ]
    };

    this.piglets = {
      title: 'Piglets Photo Album',
      description: 'Piglets are too cute!',
      photos: [
        {
          url:'http://www.tehcute.com/pics/201307/piglet-keeping-cool.jpg',
          alt:'Too Cute Piglet 1'
        },
        {
          url:'https://c2.staticflickr.com/6/5019/5476287563_ee1ab67638_z.jpg',
          alt:'Too Cute Piglet 2'
        },
        {
          url:'http://justcuteanimals.com/wp-content/uploads/2014/09/cute-piglet-animal-pictures-pigs-piggies-pics.jpg',
          alt:'Too Cute Piglet 3'
        }
      ]
    };

    this.hedgehogs = {
      title: 'Hedgehogs Photo Album',
      description: 'Hedgehogs are Adorable!',
      photos: [
        {
          url:'https://s-media-cache-ak0.pinimg.com/236x/d5/65/75/d56575af0463fff19dc043545edceced.jpg',
          alt:'Adorable Hedgehog 1'
        },
        {
          url:'http://justcuteanimals.com/wp-content/uploads/2012/11/cute-animal-skateboard-baby-hedgehog-table-pics.jpg',
          alt:'Adorable Hedgehog 2'
        },
        {
          url:'http://40.media.tumblr.com/1e0315765429e4d2e5315a86bb176e02/tumblr_nmxdzmT3QD1ura9vuo1_500.jpg',
          alt:'Adorable Hedgehog 3'
        }
      ]
    };
  }
};
