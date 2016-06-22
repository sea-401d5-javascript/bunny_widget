'use strict';

module.exports = function(app) {
  require('./imageController')(app);
  require('./photo_controller')(app);
};
