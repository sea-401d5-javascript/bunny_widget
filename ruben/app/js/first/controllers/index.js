module.exports = function(app) {
  require('./ImageController')(app);
  require('./AlbumController')(app);
};
