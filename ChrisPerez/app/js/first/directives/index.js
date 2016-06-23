module.exports = function(app) {
  // require('./FirstDirective')(app);
  // require('./SecondDirective')(app);
  // require('./ThirdDirective')(app);
  require('./albumDirective')(app);
  require('./fullDirective')(app);
};
