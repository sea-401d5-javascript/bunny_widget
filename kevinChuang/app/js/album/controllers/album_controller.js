module.exports = function(app) {
  app.controller('AlbumController', ['$scope', function(app) {
    this.currentImg = '';
    this.cats = {
      type: 'cats',
      title: 'Sushi Cats',
      desc: 'The fluffiest, cutest, and tastiest mammal of them all.',
      imgs: [
        {
          url: 'http://cdn.akihabaranews.com/sites/default/files/sushi_cat_update.7.png',
          alt: 'Tamago'
        },{
          url:'http://cdn.akihabaranews.com/sites/default/files/sushi_cat_update.3.png',
          alt: 'Sake'
        }, {
          url: 'http://cdn.akihabaranews.com/sites/default/files/sushi_cat_update.10.png',
          alt: 'Kyuri'
        }]
    };

    this.turtles = {
      type: 'turtles',
      title: 'Adolescent Scientifically-altered Samurai Turtles',
      desc: 'All of these turtles have a PhD in astrophysics are are world class musicians, but they rarely show their talents because staying home is better.',
      imgs: [
        {
          url: 'https://s-media-cache-ak0.pinimg.com/736x/58/79/29/587929e33f23f16bfeb17b3f1de6c401.jpg',
          alt: 'Albert Einstein'
        },
        {
          url: 'http://www.wildlifedepartment.com/wildlifemgmt/turtles/Common%20Map%20Turtle.jpg',
          alt: 'Tycho Brahe'
        },
        {
          url: 'http://animalia-life.com/data_images/turtle/turtle1.jpg',
          alt: 'Michio Kaku'
        }]
    };

    this.manBirds = {
      type: 'manbird',
      title: 'Man Birds',
      desc: 'If you think their hollow bones held them back, look at your own biceps and proceed to reevaluate your life',
      imgs: [
        {
          url: 'http://67.media.tumblr.com/207a04c79c56d68c33db2d6d4061a13e/tumblr_n6bqwxEi0l1svyny6o1_500.jpg',
          alt: 'The Pidgeon Twins'
        },
        {
          url: 'https://i.ytimg.com/vi/SXtvgvcebAM/maxresdefault.jpg',
          alt: 'John Cegull'
        },
        {
          url: 'http://i1.kym-cdn.com/photos/images/facebook/000/115/894/167137_10150126735196171_502226170_8289055_1532159_n.jpg',
          alt: 'Toucan "The Loops" Sam'
        }]
    };
  }]);
};
