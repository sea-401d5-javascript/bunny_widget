module.exports = function(app) {
  require('DescriptionDiretive')(app);
  require('FullSizeDirective')(app);
  require('ThumbnailDirective')(app);
};
