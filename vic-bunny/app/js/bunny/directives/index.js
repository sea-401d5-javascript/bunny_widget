module.exports = function(app) {
  require('./nobunny-directive')(app);
  require('./thumbbunny-directive')(app);
  require('./vicbunny-directive')(app);
};
