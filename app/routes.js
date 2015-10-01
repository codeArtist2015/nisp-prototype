module.exports = {
  bind : function (app) {

    app.get('/', function (req, res) {
      res.render('index');
    });  
      
//********************************
// Start routes
//********************************
      
    app.get('/start_persephone', function (req, res) {
      res.render('start/start_persephone1');
    });       
      
    
// End Start routes
      
      
//******************************** 
// Dashboard routes
//********************************
      
    app.get('/dashboard-persephone-gaps1', function (req, res) {
      res.render('dashboard/dashboard-persephone-gaps1');
    })   
      
      
// End Dashboard routes    
    
//********************************
// NI routes
//********************************
    
      app.get('/ni/ni-persephone-full5', function (req, res) {
      res.render('ni/ni-persephone-full5');
    })     
    
// End NI routes    
    
    
      app.get('/kitchen-sink', function (req, res) {
      res.render('kitchen-sink',{"forms": req.session['ks']});
    });
      
    app.get('/end-page', function (req, res) {
      res.render('end');
    });
      
    app.post('/kitchen-sink', function (req, res) {
        req.session.ks = req.body;
        
        var errors = new Object()
        
        if(req.session['ks']['fname'] == ""){ errors.fname = 'Please complete'; }
        if(req.session['ks']['lname'] == ""){ errors.lname = 'Please complete'; }
        if(req.session['ks']['info'] == ""){ errors.info = 'Please complete'; }
        if(req.session['ks']['yesno'] == undefined){ errors.yesno = 'Please complete'; }
           
        if(Object.keys(errors).length == 0){
            res.redirect("end-page");
                }else{   res.render('kitchen-sink',{"forms": req.session['ks'],"errors":errors});    }
    });

  }
};
