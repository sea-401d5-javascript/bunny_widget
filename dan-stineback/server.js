'use strict';
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/build'));

app.listen(3030, () => {
  console.log('server is running on 3030');
});
