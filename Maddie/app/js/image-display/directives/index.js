module.exports = function(app) {
  require('./fullSizeDirective')(app);
  require('./smallImageDirective')(app);
  require('./textOnlyDirective')(app);
};
