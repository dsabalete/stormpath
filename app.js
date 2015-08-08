var express = require('express');
var stormpath = require('express-stormpath');

var app = express();

app.set('views', './views');
app.set('view engine', 'jade');

var stormpathMiddleware = stormpath.init(app, {
  apiKeyFile: '/home/ubuntu/workspace/apiKey-19M7M6K1S4MGBIKEOT6U4YO84.properties',
  application: 'https://api.stormpath.com/v1/applications/7ixjuSto8zsihRZJz2DZ35',
  secretKey: 'janderklandersecretgrijander',
  expandCustomData: true,
  enableForgotPassword: true
});

app.use(stormpathMiddleware);

app.get('/', function(req, res) {
  res.render('home', {
    title: 'Welcome'
  });
});

app.listen(process.env.PORT);