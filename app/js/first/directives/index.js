module.exports = function(app) {
  require('./full_image_directive')(app);
  require('./title_directive')(app);
  require('./tiny_image_directive')(app);
  require('./album_directive')(app);
  require('./dummy')(app);
};
