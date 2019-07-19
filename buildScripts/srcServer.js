var express = require('express');
var path = require('path');
var open = require('open');

/*var port = 3000;
var app = express();*///Made changes
import webpack from 'webpack';
//var webpack = require('webpack');
import config from '../webpack.config.dev';
//var config = require('../webpack.config.dev');

const port = 3000
const app = express()
const compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});
app.get('/users', function(req, res) {
  res.json([
    {"id": 1, "firstName": "Bob", "lastName": "Smith", "email": "bob@gmail.com"},
    {"id": 2, "firstName": "Tammy", "lastName": "Norton", "email": "tammy@gmail.com"},
    {"id": 3, "firstName": "Tinna", "lastName": "Lee", "email": "tina@yahoo.com"}
  ]);
});

app.listen(port, function(err) {
  if (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  } else{
    open('http://localhost:' + port);
  }
});
