'use strict';
module.exports =function(app) {
  require('./thumbnailDirective')(app);
  require('./imageDirective')(app);
};
