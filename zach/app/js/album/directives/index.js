module.exports = function(app) {
  require('./PhotoDirective')(app);
  require('./AlbumDirective')(app);
  require('./TextDirective')(app);
};
