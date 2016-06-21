'use strict';
module.exports =function(app) {
  require('./thumbnailController')(app);
  require('./imageController')(app);
};
