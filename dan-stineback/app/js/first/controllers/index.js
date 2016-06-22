'use strict';

module.exports = function(app) {
  require('./imageController')(app);
  require('./photoController')(app);
};
