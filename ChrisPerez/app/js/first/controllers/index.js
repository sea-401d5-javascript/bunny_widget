module.exports = function(app) {
  require('./FirstController')(app);
  require('./AlbumController')(app);
};
