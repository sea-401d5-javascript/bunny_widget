'use strict';
module.exports = function(app) {
  app.controller('PhotosController', PhotosController);

  function PhotosController() {
    this.height = '400',
    this.width = '400',
    this.dragonPhotos = {
      title:'Dragon photos',
      description:'Pictures of Daragons',
      photos:[
        {
          url: 'http://vignette2.wikia.nocookie.net/dragonhandbook/images/e/e5/Chaos_breathing_fire.jpeg/revision/latest?cb=20130815032055',
          title: 'Dragon one',
          description:  'Firebreathing'
        },
        {
          url: 'http://images2.fanpop.com/image/photos/8700000/Red-dragon-dragons-8714488-688-868.jpg',
          title: 'Dragon two',
          description: 'lighting'

        },
        {
          url: 'http://static.tvtropes.org/pmwiki/pub/images/How-to-Train-Your-Dragon-2_3414.jpg',
          title: 'Dragon three',
          description: 'Sharptooth'

        }
      ]
    };

    this.cowPhotos  = {
      title:'Cow Photos',
      description:'Pictures of Cows',
      photos:[
        {
          url: 'http://resources3.news.com.au/images/2012/03/27/1226311/607271-cow.jpg',
          title: 'Cow one',
          description: 'Silly Cow'
        },
        {
          url: 'http://i.telegraph.co.uk/multimedia/archive/02532/Cows_2532445b.jpg',
          title: 'Cow two',
          description: 'many silly cows'
        },
        {
          url: 'http://fillyourplate.org/blog/wp-content/uploads/2015/07/bigstock-Head-of-funny-cow-looking-to-a-48484160-418x512.jpg',
          title: 'Cow three',
          description: 'Horn cow'
        }
      ]
    };

    this.pupPhotos  = {
      title:'Pup Photos',
      description:'Pictures of puppies',
      photos:[
        {
          url: 'http://theilovedogssite.com/wp-content/uploads/2015/01/4577137586_5f4cf7fbd3_z.jpg',
          title: 'Pup one',
          description: 'Brown pup'
        },
        {
          url: 'http://barkingroyalty.com/wp-content/uploads/2015/12/cutest-puppies.jpg',
          title: 'Pup two',
          description: 'red collar pup'
        },
        {
          url: 'http://www.pluspets.net/wp-content/uploads/2010/07/Cutest-Puppies1.jpg',
          title: 'Pup three',
          description: 'lab pup'
        }
      ]
    };

  }
};
