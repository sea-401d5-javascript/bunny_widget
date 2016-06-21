module.exports = function(app) {
  require('./DescriptionDirective')(app);
  require('./FullDirective')(app);
  require('./ThumbnailDirective')(app);
};
