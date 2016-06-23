module.exports = function(app) {
  require('./textonly-directive')(app);
  require('./thumbsize-directive')(app);
  require('./fullsize-directive')(app);
  require('./photoalbum-directive')(app);
};
