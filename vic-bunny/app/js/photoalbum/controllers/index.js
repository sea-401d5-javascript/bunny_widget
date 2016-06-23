module.exports = function(app) {
  require('./bunny-controller')(app);
  require('./photoalbum-controller')(app);
};
