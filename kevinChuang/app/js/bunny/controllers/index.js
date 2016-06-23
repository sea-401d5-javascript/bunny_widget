module.exports = function(app) {
  require('./bunny_controller.js')(app);
  require('./album_controller.js')(app);
};
