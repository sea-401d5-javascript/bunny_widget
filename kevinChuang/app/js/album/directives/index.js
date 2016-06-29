module.exports = function(app) {
  require('./album_directive.js')(app);
  require('./text_directive.js')(app);
  require('./thumb_directive.js')(app);
  require('./full_directive.js')(app);  
};
