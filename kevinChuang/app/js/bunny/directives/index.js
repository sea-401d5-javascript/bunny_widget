module.exports = function(app) {
  require('./full_bunny_directive.js')(app);
  require('./small_bunny_directive.js')(app);
  require('./no_bunny_directive.js')(app);
};
