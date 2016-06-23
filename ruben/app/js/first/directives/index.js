module.exports = function(app) {
  require('./FullDirective')(app);
  require('./TitleDirective')(app);
  require('./SmallDirective')(app);
  require('./AlbumDirective')(app);
};
