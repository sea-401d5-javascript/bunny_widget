'use strict';
module.exports =function(app) {
  require('./thumbnailDirective')(app);
  require('./imageDirective')(app);
  require('./titleDirective')(app);
  require('./photo_directive')(app);
};
