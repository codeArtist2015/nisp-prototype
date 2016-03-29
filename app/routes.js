module.exports = {
  bind : function (app) {
      var   passport = require('passport'),
            Strategy = require('passport-local').Strategy,
            db = require('../db'),
            authUtil = require('../auth.js'),
            userId = process.env.USERNAME,
            pwd = process.env.PASSWORD;
      
      
      

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
      res.render('users/login/login', {"signout":false});
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

app.get('/users/ni/ni-persephone-fuller', 
        require('connect-ensure-login').ensureLoggedIn('/users/login'),
        function (req, res) {
            res.render('users/'+req.user.id+'/ni/ni-persephone-fuller', {user: req.user, "signout":true});
});      
      
      
      
 app.get('/users/ni/basket-improve-emp-benefits/:year/pay/:amount/emp/:empAmount/ben/:benefitNum', 
         require('connect-ensure-login').ensureLoggedIn('/users/login'), 
         function (req, res)  {        
          res.render('users/'+req.user.id+'/ni/basket-improve-emp-benefits', { user:req.user, 
                    "year":  req.params.year,"amount":req.params.amount,
                    "empAmount": req.params.empAmount, "benefitNum": req.params.benefitNum, "signout":true});
 });   

app.get('/users/ni/ni-check', 
        require('connect-ensure-login').ensureLoggedIn('/users/login'),
        function (req, res) {
            res.render('users/'+req.user.id+'/ni/ni-check', { user: req.user, "signout":true});
});
      
app.get('/users/ni/basket-improve/:year/pay/:amount', 
         require('connect-ensure-login').ensureLoggedIn('/users/login'),
         function (req, res) {        
            res.render('users/'+req.user.id+'/ni/basket-improve', { user: req.user, 
                    "year": req.params.year,"amount":req.params.amount, "signout":true});
});      
      
app.get('/users/ni/basket-improve-all/:year/pay/:amount/emp/:empAmount/ben/:benefitNum', 
         require('connect-ensure-login').ensureLoggedIn('/users/login'),
         function (req, res) {        
            res.render('users/'+req.user.id+'/ni/basket-improve-all', { user: req.user, 
                "year": req.params.year,"amount":req.params.amount, "empAmount": req.params.empAmount, 
                "benefitNum": req.params.benefitNum, "signout":true});
});       

app.get('/users/ni/basket-toolate/:year', 
    require('connect-ensure-login').ensureLoggedIn('/users/login'),
    function (req, res) {        
        res.render('users/'+req.user.id+'/ni/basket-toolate', { user: req.user, "year": req.params.year, "signout":true});
});      
      
app.get('/users/start/tsandcs', function (req, res) {
  res.render('users/start/tsandcs', {"signout":false});
});   



//**************************   Prototype 28 Routes ******************************************************************************//
//*******************************************************************************************************************************//
   
app.get("/28/start/gg_login", function (req, res) {
      res.render('28/start/gg_login', {"signout":false});
 });
 
 app.get("/28/start/start_Verify2", function (req, res) {
      res.render('28/start/start_Verify2', {"signout":false});
 });
 
 
 app.post('/28/start/gg_login', passport.authenticate('local', { failureRedirect: '/28/start/gg_login' }),
  function(req, res) {
    res.redirect('/28/dashboard/dashboardA');
});

 app.post('/28/start/start_Verify2', passport.authenticate('local', { failureRedirect: '/28/start/start_Verify2' }),
  function(req, res) {
    res.redirect('/28/dashboard/dashboardV');
});
   
app.get('/28/dashboard/dashboardA',
  require('connect-ensure-login').ensureLoggedIn('/28/start/gg_login'),
  function(req, res){
        res.render('28/dashboard/dashboard'+req.user.id, {  "mvpversion": 28, user: req.user, "signout": true   });
});

app.get('/28/dashboard/dashboardV',
  require('connect-ensure-login').ensureLoggedIn('/28/start/start_Verify2'),
  function(req, res){
        res.render('28/dashboard/dashboard-v-'+req.user.id, {  "mvpversion": 28, user: req.user, "signout": true   });
});           
    
//******************************************************************************************************************************//   
   
//**************************   Prototype 29 Routes ******************************************************************************//
//*******************************************************************************************************************************//
   
app.get("/29/start/gg_login", function (req, res) {
      res.render('29/start/gg_login', {"signout":false});
 });
 
 app.get("/29/start/start_Verify2", function (req, res) {
      res.render('29/start/start_Verify2', {"signout":false});
 });
 
 
 app.post('/29/start/gg_login', passport.authenticate('local', { failureRedirect: '/29/start/gg_login' }),
  function(req, res) {
    res.redirect('/29/dashboard/dashboardA');
});

 app.post('/29/start/start_Verify2', passport.authenticate('local', { failureRedirect: '/29/start/start_Verify2' }),
  function(req, res) {
    res.redirect('/29/dashboard/dashboardA');
});
   
app.get('/29/dashboard/dashboardA',
  require('connect-ensure-login').ensureLoggedIn('/29/start/gg_login'),
  function(req, res){
        res.render('29/dashboard/dashboard'+req.user.id, {  "mvpversion": 29, user: req.user, "signout": true   });
});

app.get('/29/dashboard/dashboardV',
  require('connect-ensure-login').ensureLoggedIn('/29/start/start_Verify2'),
  function(req, res){
        res.render('29/dashboard/dashboard-v-'+req.user.id, {  "mvpversion": 29, user: req.user, "signout": true   });
});           
    
//******************************************************************************************************************************// 

//**************************   Prototype 29 Routes ******************************************************************************//
//*******************************************************************************************************************************//
   
app.get("/30/start/gg_login", function (req, res) {
      res.render('30/start/gg_login', {"signout":false});
 });
 
 app.get("/30/start/start_Verify2", function (req, res) {
      res.render('30/start/start_Verify2', {"signout":false});
 });
 
 
 app.post('/30/start/gg_login', passport.authenticate('local', { failureRedirect: '/30/start/gg_login' }),
  function(req, res) {
    res.redirect('/30/dashboard/dashboardA');
});

 app.post('/30/start/start_Verify2', passport.authenticate('local', { failureRedirect: '/30/start/start_Verify2' }),
  function(req, res) {
    res.redirect('/30/dashboard/dashboardA');
});
   
app.get('/30/dashboard/dashboardA',
  require('connect-ensure-login').ensureLoggedIn('/30/start/gg_login'),
  function(req, res){
        res.render('30/dashboard/dashboard'+req.user.id, {  "mvpversion": 30, user: req.user, "signout": true   });
});

app.get('/30/dashboard/dashboardV',
  require('connect-ensure-login').ensureLoggedIn('/30/start/start_Verify2'),
  function(req, res){
        res.render('30/dashboard/dashboard-v-'+req.user.id, {  "mvpversion": 30, user: req.user, "signout": true   });
});           
    
//******************************************************************************************************************************//   
      


//****--------------------------------------------------------------------------------------------------------*****//
//****                                                                                                        *****//
//****    Prototype Version: XX                                                                               *****//
//****                                                                                                        *****//  
//****--------------------------------------------------------------------------------------------------------*****//

 app.get("/:mvpversion/start", authUtil.basicAuth(userId, pwd),
        function (req, res) {
            res.render(req.params.mvpversion+'/start/start_persephone1', {"mvpversion": req.params.mvpversion,"signout":false});
        });  

app.get("/:mvpversion/feedback", authUtil.basicAuth(userId, pwd),
        function (req, res) {
           res.render(req.params.mvpversion+'/feedback', {"mvpversion": req.params.mvpversion,"signout":false});
        });  
    
      
//********************************
// Start routes
//********************************
           
app.get('/:mvpversion/tsandcs', authUtil.basicAuth(userId, pwd),
      function (req, res) {
          res.render(req.params.mvpversion+'/start/tsandcs', {"mvpversion": req.params.mvpversion, "signout":false});
      });       
// End Start routes
      
      
//******************************** 
// Dashboard routes
//********************************
      
    app.get('/:mvpversion/dashboard-persephone-gaps1', authUtil.basicAuth(userId, pwd),
            function (req, res) {
                res.render(req.params.mvpversion+'/dashboard/dashboard-persephone-gaps1', {"mvpversion": req.params.mvpversion, "signout":true});
            });
            
// End Dashboard routes    
    
//********************************
// NI routes
//********************************
    
    app.get('/:mvpversion/ni/ni-persephone-full5', authUtil.basicAuth(userId, pwd),
            function (req, res) {
                res.render(req.params.mvpversion+'/ni/ni-persephone-full5', {"mvpversion": req.params.mvpversion, "signout":true});
            });
      
    app.get('/:mvpversion/ni/ni-persephone-full6', authUtil.basicAuth(userId, pwd),
            function (req, res) {
                res.render(req.params.mvpversion+'/ni/ni-persephone-full6', {"mvpversion": req.params.mvpversion, "signout":true});
            });

app.get('/:mvpversion/ni/ni-persephone-fuller', authUtil.basicAuth(userId, pwd),
            function (req, res) {
                res.render(req.params.mvpversion+'/ni/ni-persephone-fuller', {"mvpversion": req.params.mvpversion, "signout":true});
            });      

    app.get('/:mvpversion/ni/ni-check', authUtil.basicAuth(userId, pwd),
            function (req, res) {
                res.render(req.params.mvpversion+'/ni/ni-check', {"mvpversion": req.params.mvpversion, "signout":true});
            });
      
    app.get('/:mvpversion/ni/basket-toolate/:year', authUtil.basicAuth(userId, pwd),
            function (req, res) {        
               res.render(req.params.mvpversion+'/ni/basket-toolate', {"year": req.params.year,"mvpversion": req.params.mvpversion, "signout":true});
            });
      
    app.get('/:mvpversion/ni/basket-improve/:year/pay/:amount', authUtil.basicAuth(userId, pwd),
            function (req, res) {        
                res.render(req.params.mvpversion+'/ni/basket-improve', {"year":        
                req.params.year,"amount":req.params.amount,"mvpversion": req.params.mvpversion, "signout":true});
            });
    app.get('/:mvpversion/ni/basket-improve-emp-benefits/:year/pay/:amount/emp/:empAmount/ben/:benefitNum', authUtil.basicAuth(userId, pwd),
            function (req, res)     {        
                res.render(req.params.mvpversion+'/ni/basket-improve-emp-benefits', {"year":           
                req.params.year,"amount":req.params.amount,
                "empAmount": req.params.empAmount, "benefitNum": req.params.benefitNum,"mvpversion": 
                req.params.mvpversion, "signout":true});
            });      
    
    app.get('/:mvpversion/ni/basket-improve-emp-benefits2/:year/pay/:amount/emp/:empAmount/ben/:benefitNum', authUtil.basicAuth(userId, pwd),
            function (req, res)     {        
                res.render(req.params.mvpversion+'/ni/basket-improve-emp-benefits2', {"year":           
                req.params.year,"amount":req.params.amount,
                "empAmount": req.params.empAmount, "benefitNum": req.params.benefitNum,"mvpversion": 
                req.params.mvpversion, "signout":true});
            });      

app.get('/:mvpversion/ni/basket-improve-all/:year/pay/:amount/emp/:empAmount/ben/:benefitNum', authUtil.basicAuth(userId, pwd),
            function (req, res) {        
              res.render(req.params.mvpversion+'/ni/basket-improve-all', {"year": req.params.year,"amount":req.params.amount,
              "empAmount": req.params.empAmount, "benefitNum": req.params.benefitNum,"mvpversion": req.params.mvpversion, "signout":true});
            });         
      
// End NI routes        




// Ineligible users are routed to '/ineligible.html'

app.get('/25/start/p60_question', function (req, res) {

  var choose = req.query.choose;
  

  if (choose == "P60"){
    res.render('25/start/p60_question');
  } 
 
 else if (choose == "Payslip") {
    res.redirect('/25/start/payslip_question');
  }

  else if (choose == "No") {
    res.redirect('/25/start/ineligible');
  }

 
  
});

// Write the user input to the check your answers page

app.get('/check-your-answers-page', function (req, res) {

  var feat = req.query.feat;

  res.render('check-your-answers-page', { 'feat' : feat });
  
});



 
    
  }
};





