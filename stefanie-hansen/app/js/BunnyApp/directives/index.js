module.exports = function(app) {
  require('./DescriptionDirective')(app);
  require('./FullSizeDirective')(app);
  require('./ThumbnailDirective')(app);
};
