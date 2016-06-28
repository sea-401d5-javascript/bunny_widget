module.exports = function(app) {
  app.controller('AlbumController', ['$scope', function() {
    this.currentphoto;
    this.catPhotos = [{
      title: 'cutekitty',
      url: 'https://pbs.twimg.com/profile_images/567285191169687553/7kg_TF4l.jpeg'
    }, {
      title: 'cuterkitty',
      url: 'https://i.ytimg.com/vi/ef9Bu1mkX_Q/hqdefault.jpg'
    }, {
      title: 'cutestkitty',
      url: 'http://www.tpevent.com/wp-content/uploads/2016/01/cute-cat-images-tpevent-5.jpg'
    }, {
      title: 'cutestestkitty',
      url: 'http://2.bp.blogspot.com/-kpUw3uEl7JE/T7xmf0Tf8qI/AAAAAAAIq_E/_AtVyZsJTsA/s1600/cute+cat+pictures+(33).jpg'
    }];
    this.catTitle = 'Kitten Album';
    this.catDesc = 'A gallery of some cute cat photos';
    this.dogPhotos = [{
      title: 'cutedoggy',
      url: 'http://cdn.lookanimals.com/pictures/spenglercounseling.com/wp-content/uploads/2013/01/Cute-puppy.jpg'
    }, {
      title: 'cuterdoggy',
      url: 'https://puppydogweb.com/gallery/puppies/labradorretriever2.jpg'
    }, {
      title: 'cutestdoggy',
      url: 'http://www.lovethispic.com/uploaded_images/170717-Cute-Puppy.jpg'
    }, {
      title: 'cutestestdoggy',
      url: 'https://dncache-mauganscorp.netdna-ssl.com/thumbseg/72/72007-bigthumbnail.jpg'
    }];
    this.dogTitle = 'Puppy Album';
    this.dogDesc = 'A gallery of some cute dog photos';
    this.lemurPhotos = [{
      title: 'cutelemur',
      url: 'http://media.npr.org/assets/img/2016/04/27/istock_000017155114_small-d578918362bd9863aeb7cbb5aa0c502e3288b42e-s900-c85.jpg'
    }, {
      title: 'cuterlemur',
      url: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRFZQswPfmq4PPydEHzNxpAGz0bomX3vzyLQk6oT_4P4Pck16oy'
    }, {
      title: 'cutestlemur',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-IDfMnPTPfeIfa5wTtkuUSSyK1-apbJz-Nn9uRytncXwbe09EQQ'
    }, {
      title: 'cutestestlemur',
      url: 'http://www.fotothing.com/photos/77e/77e41eca262e28ec0ad27ee275b676b2.jpg'
    }];
    this.lemurTitle = 'Lemur Album';
    this.lemurDesc = 'A gallery of some cute lemur photos';
  }]);
};
