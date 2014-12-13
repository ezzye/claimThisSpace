'use strict';

// The Package is past automatically as first parameter
module.exports = function(Claimthisspace, app, auth, database) {

  app.get('/claimthisspace/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/claimthisspace/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/claimthisspace/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/claimthisspace/example/render', function(req, res, next) {
    Claimthisspace.render('index', {
      package: 'claimthisspace'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
