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
      
     app.get('/tsandcs', function (req, res) {
      res.render('start/tsandcs');
    });       
// End Start routes
      
      
//******************************** 
// Dashboard routes
//********************************
      
    app.get('/dashboard-persephone-gaps1', function (req, res) {
      res.render('dashboard/dashboard-persephone-gaps1');
    });
      
      
// End Dashboard routes    
    
//********************************
// NI routes
//********************************
    
    app.get('/ni/ni-persephone-full5', function (req, res) {
      res.render('ni/ni-persephone-full5');
    });
      
    app.get('/ni/ni-persephone-fuller', function (req, res) {
      res.render('ni/ni-persephone-fuller');
    });      

    app.get('/ni/ni-check', function (req, res) {
      res.render('ni/ni-check');
    });
      
    app.get('/ni/basket-toolate/:year', function (req, res) {        
          res.render('ni/basket-toolate',{"year": req.params.year});
    });
      
    app.get('/ni/basket-improve/:year/pay/:amount', function (req, res) {        
          res.render('ni/basket-improve',{"year": req.params.year,"amount":req.params.amount});
    });
    app.get('/ni/basket-improve-emp-benefits/:year/pay/:amount/emp/:empAmount/ben/:benefitNum', function (req, res) {        
          res.render('ni/basket-improve-emp-benefits',{"year": req.params.year,"amount":req.params.amount,
                    "empAmount": req.params.empAmount, "benefitNum": req.params.benefitNum});
    });      
    
    app.get('/ni/basket-improve-all/:year/pay/:amount/emp/:empAmount/ben/:benefitNum', function (req, res) {        
          res.render('ni/basket-improve-all',{"year": req.params.year,"amount":req.params.amount,
                    "empAmount": req.params.empAmount, "benefitNum": req.params.benefitNum});
    });         
      
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
