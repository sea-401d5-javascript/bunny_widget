module.exports = function(app) {
  require('./photoAlbumDirective')(app);
  require('./textOnlyDirective')(app);
  require('./smallImageDirective')(app);
  require('./fullSizeDirective')(app);
};
