'use strict';

module.exports = function(app) {
  require('./description_directive')(app);
  require('./thumb_directive')(app);
  require('./full_directive')(app);
};
