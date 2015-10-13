module.exports = {
  bind : function (app) {
      var   passport = require('passport'),
            Strategy = require('passport-local').Strategy,
            db = require('../db');
      
      
      

    // Configure the local strategy for use by Passport.
    //
    // The local strategy require a `verify` function which receives the credentials
    // (`username` and `password`) submitted by the user.  The function must verify
    // that the password is correct and then invoke `cb` with a user object, which
    // will be set at `req.user` in route handlers after authentication.
    passport.use(new Strategy(
      function(username, password, cb) {
        db.users.findByUsername(username, function(err, user) {
          if (err) { return cb(err); }
          if (!user) { return cb(null, false); }
          if (user.password != password) { return cb(null, false); }
          return cb(null, user);
        });
      }));


    // Configure Passport authenticated session persistence.
    //
    // In order to restore authentication state across HTTP requests, Passport needs
    // to serialize users into and deserialize users out of the session.  The
    // typical implementation of this is as simple as supplying the user ID when
    // serializing, and querying the user record by ID from the database when
    // deserializing.
    passport.serializeUser(function(user, cb) {
      cb(null, user.id);
    });

    passport.deserializeUser(function(id, cb) {
      db.users.findById(id, function (err, user) {
        if (err) { return cb(err); }
        cb(null, user);
      });
    });

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());      

 app.get("/users/start", function (req, res) {
      res.render('users/start/start_persephone1', {"signout":false});
 });  
      
 app.get("/users/login", function (req, res) {
      res.render('users/login/login',{"signout":false});
 });
      
app.post('/users/login', passport.authenticate('local', { failureRedirect: '/users/login' }),
  function(req, res) {
    res.redirect('/users/dashboard');
});

app.get('/users/logout', function(req, res){    
    req.logout();
    res.redirect('/users/start');
});

app.get('/users/dashboard',
  require('connect-ensure-login').ensureLoggedIn('/users/login'),
  function(req, res){
    res.render('users/'+req.user.id+'/dashboard/dashboard-persephone-gaps1', { user: req.user, "signout": true   });
});
      
app.get('/users/ni/ni-persephone-full', 
    require('connect-ensure-login').ensureLoggedIn('/users/login'),
    function (req, res) {
        res.render('users/'+req.user.id+'/ni/ni-persephone-full5', { user:req.user, "signout": true});
});      
      
      
      
app.get('/users/start/tsandcs', function (req, res) {
  res.render('users/start/tsandcs', {"signout":false});
});   
      
   
             
//****--------------------------------------------------------------------------------------------------------*****//
//****                                                                                                        *****//
//****    Prototype Version: XX                                                                               *****//
//****                                                                                                        *****//  
//****--------------------------------------------------------------------------------------------------------*****//

 app.get("/:mvpversion/start", function (req, res) {
      res.render(req.params.mvpversion+'/start/start_persephone1', {"mvpversion": req.params.mvpversion,"signout":false});
 });  

app.get("/:mvpversion/feedback", function (req, res) {
      res.render(req.params.mvpversion+'/feedback', {"mvpversion": req.params.mvpversion,"signout":false});
 });  
    
      
//********************************
// Start routes
//********************************
           
app.get('/:mvpversion/tsandcs', function (req, res) {
  res.render(req.params.mvpversion+'/start/tsandcs', {"mvpversion": req.params.mvpversion, "signout":false});
});       
// End Start routes
      
      
//******************************** 
// Dashboard routes
//********************************
      
    app.get('/:mvpversion/dashboard-persephone-gaps1', function (req, res) {
      res.render(req.params.mvpversion+'/dashboard/dashboard-persephone-gaps1', {"mvpversion": req.params.mvpversion, "signout":true});
    });
            
// End Dashboard routes    
    
//********************************
// NI routes
//********************************
    
    app.get('/:mvpversion/ni/ni-persephone-full5', function (req, res) {
      res.render(req.params.mvpversion+'/ni/ni-persephone-full5', {"mvpversion": req.params.mvpversion, "signout":true});
    });
      
    app.get('/:mvpversion/ni/ni-persephone-fuller', function (req, res) {
      res.render(req.params.mvpversion+'/ni/ni-persephone-fuller', {"mvpversion": req.params.mvpversion, "signout":true});
    });      

    app.get('/:mvpversion/ni/ni-check', function (req, res) {
      res.render(req.params.mvpversion+'/ni/ni-check', {"mvpversion": req.params.mvpversion, "signout":true});
    });
      
    app.get('/:mvpversion/ni/basket-toolate/:year', function (req, res) {        
          res.render(req.params.mvpversion+'/ni/basket-toolate', {"year": req.params.year,"mvpversion": req.params.mvpversion, "signout":true});
    });
      
    app.get('/:mvpversion/ni/basket-improve/:year/pay/:amount', function (req, res) {        
          res.render(req.params.mvpversion+'/ni/basket-improve', {"year":        
            req.params.year,"amount":req.params.amount,"mvpversion": req.params.mvpversion, "signout":true});
    });
    app.get('/:mvpversion/ni/basket-improve-emp-benefits/:year/pay/:amount/emp/:empAmount/ben/:benefitNum', function (req, res)     {        
          res.render(req.params.mvpversion+'/ni/basket-improve-emp-benefits', {"year":           
                    req.params.year,"amount":req.params.amount,
                    "empAmount": req.params.empAmount, "benefitNum": req.params.benefitNum,"mvpversion": 
                    req.params.mvpversion, "signout":true});
    });      
    
    app.get('/:mvpversion/ni/basket-improve-all/:year/pay/:amount/emp/:empAmount/ben/:benefitNum', function (req, res) {        
          res.render(req.params.mvpversion+'/ni/basket-improve-all', {"year": req.params.year,"amount":req.params.amount,
            "empAmount": req.params.empAmount, "benefitNum": req.params.benefitNum,"mvpversion": req.params.mvpversion, "signout":true});
    });         
      
// End NI routes        
      
    
  }
};
