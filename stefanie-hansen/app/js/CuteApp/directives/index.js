module.exports = function(app) {
  require('./description-directive')(app);
  require('./full-directive')(app);
  require('./thumbnail-directive')(app);
  require('./album-directive')(app);
};
