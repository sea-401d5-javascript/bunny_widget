module.exports = function(app) {
  require('./ButtSnifferController')(app);
  require('./PhotoAlbumController')(app);
};
