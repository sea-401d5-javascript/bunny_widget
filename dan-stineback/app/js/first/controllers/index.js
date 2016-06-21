'use strict';

module.exports = function(app) {
  require('./FirstController')(app);
  require('./imageController')(app);
};
