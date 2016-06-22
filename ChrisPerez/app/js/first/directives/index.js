module.exports = function(app) {
  require('./FirstDirective')(app);
  require('./SecondDirective')(app);
  require('./ThirdDirective')(app);
};
