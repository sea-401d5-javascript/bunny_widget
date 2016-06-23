'use strict';

module.exports = function(app) {
  app.controller('AlbumController', AlbumController);

  function AlbumController() {
    this.pugs = {
      title: 'Cute Pug Photos',
      description: 'Pugs are adorable.',
      photos: [
        {
          url:'http://66.media.tumblr.com/b73ab1ab8ae52bd046bc1c22ccc213e0/tumblr_o2xjy0A1sU1qb08qmo1_1280.jpg',
          alt: 'Pug Photo 1'
        },
        {
          url:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTwXHZD53IUriO1Z6UQoJIDMgrn9HAKMQ6AiK6yrfmC0FBQIgOv-A',
          alt:'Pug Photo 2'
        },
        {
          url:'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTXozciYYEeDJbI5IaJZfimPOyPM8FxslWAKawQES-VkoMl5puJMQ',
          alt:'Pug Photo 3'
        }
      ]
    };
    this.frenchies = {
      title: 'Cute Frenchie Photos',
      description: 'Frenchies are super cute.',
      photos: [
        {
          url:'http://www.lovethispic.com/uploaded_images/213393-Baby-Frenchies.jpg',
          alt:'Frenchie Photo 1'
        },
        {
          url:'http://static1.squarespace.com/static/551dc1e2e4b0adba21a6658d/t/5692e107e0327c8c42318b58/1452466511343/?format=1000w',
          alt:'Frenchie Photo 2'
        },
        {
          url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCDdeJb2U5k-mLS0wCkYdBnn8EuHcue-8Cpr81WSZI6c1BzBDF',
          alt:'Frenchie Photo 3'
        }
      ]
    };

    this.slowLoris = {
      title: 'Cute Slow Loris Photos',
      description: 'Slow Loris are my spirit animal',
      photos: [
        {
          url:'http://dingo.care2.com/pictures/petition_images/petition/122/918049-1399565898-wide.jpg',
          alt:'Slow Loris 1'
        },
        {
          url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRpEIPWb1MyeepTgb9x69i6iV-KSjuCIGk4LsUdmuLNss4-s60',
          alt: 'Slow Loris 2'
        },
        {
          url:'http://londonbeep.com/wp-content/uploads/2015/04/funny-animal-with-big-eyes-5.png',
          alt:'Slow Loris 3'
        }
      ]
    };
  }
};
