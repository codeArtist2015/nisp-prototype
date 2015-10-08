

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
      
     app.get('/tsandcs132', function (req, res) {
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
          res.render('ni/basket-toolate', {"year": req.params.year});
    });
      
    app.get('/ni/basket-improve/:year/pay/:amount', function (req, res) {        
          res.render('ni/basket-improve', {"year": req.params.year, "amount":req.params.amount});
    });
    app.get('/ni/basket-improve-emp-benefits/:year/pay/:amount/emp/:empAmount/ben/:benefitNum', function (req, res) {        
          res.render('ni/basket-improve-emp-benefits', {"year": req.params.year, "amount":req.params.amount,
                     "empAmount": req.params.empAmount, "benefitNum": req.params.benefitNum});
    });      
    
    app.get('/ni/basket-improve-all/:year/pay/:amount/emp/:empAmount/ben/:benefitNum', function (req, res) {        
          res.render('ni/basket-improve-all', {"year": req.params.year, "amount":req.params.amount,
                     "empAmount": req.params.empAmount, "benefitNum": req.params.benefitNum});
    });         
      
// End NI routes    
    

           
//****--------------------------------------------------------------------------------------------------------*****//
//****                                                                                                        *****//
//****    Prototype Version: XX                                                                               *****//
//****                                                                                                        *****//  
//****--------------------------------------------------------------------------------------------------------*****//

 app.get("/:mvpversion", function (req, res) {
      res.render(req.params.mvpversion+'/start/start_persephone1', {"mvpversion": req.params.mvpversion});
 });  
      
      
//********************************
// Start routes
//********************************
           
app.get('/:mvpversion/tsandcs', function (req, res) {
  res.render(req.params.mvpversion+'/start/tsandcs', {"mvpversion": req.params.mvpversion});
});       
// End Start routes
      
      
//******************************** 
// Dashboard routes
//********************************
      
    app.get('/:mvpversion/dashboard-persephone-gaps1', function (req, res) {
      res.render(req.params.mvpversion+'/dashboard/dashboard-persephone-gaps1', {"mvpversion": req.params.mvpversion});
    });
      
      
// End Dashboard routes    
    
//********************************
// NI routes
//********************************
    
    app.get('/:mvpversion/ni/ni-persephone-full5', function (req, res) {
      res.render(req.params.mvpversion+'/ni/ni-persephone-full5', {"mvpversion": req.params.mvpversion});
    });
      
    app.get('/:mvpversion/ni/ni-persephone-fuller', function (req, res) {
      res.render(req.params.mvpversion+'/ni/ni-persephone-fuller', {"mvpversion": req.params.mvpversion});
    });      

    app.get('/:mvpversion/ni/ni-check', function (req, res) {
      res.render(req.params.mvpversion+'/ni/ni-check', {"mvpversion": req.params.mvpversion});
    });
      
    app.get('/:mvpversion/ni/basket-toolate/:year', function (req, res) {        
          res.render(req.params.mvpversion+'/ni/basket-toolate', {"year": req.params.year,"mvpversion": req.params.mvpversion});
    });
      
    app.get('/:mvpversion/ni/basket-improve/:year/pay/:amount', function (req, res) {        
          res.render(req.params.mvpversion+'/ni/basket-improve', {"year":        
            req.params.year,"amount":req.params.amount,"mvpversion": req.params.mvpversion});
    });
    app.get('/:mvpversion/ni/basket-improve-emp-benefits/:year/pay/:amount/emp/:empAmount/ben/:benefitNum', function (req, res)     {        
          res.render(req.params.mvpversion+'/ni/basket-improve-emp-benefits', {"year":           
                    req.params.year,"amount":req.params.amount,
                    "empAmount": req.params.empAmount, "benefitNum": req.params.benefitNum,"mvpversion": 
                    req.params.mvpversion});
    });      
    
    app.get('/:mvpversion/ni/basket-improve-all/:year/pay/:amount/emp/:empAmount/ben/:benefitNum', function (req, res) {        
          res.render(req.params.mvpversion+'/ni/basket-improve-all', {"year": req.params.year,"amount":req.params.amount,
            "empAmount": req.params.empAmount, "benefitNum": req.params.benefitNum,"mvpversion": req.params.mvpversion});
    });         
      
// End NI routes        
      
      
    
  }
};
