

module.exports = {
  bind : function (app) {

      
    app.get('/', function (req, res) {
      res.render('index');
    });  
      
           
//****--------------------------------------------------------------------------------------------------------*****//
//****                                                                                                        *****//
//****    Prototype Version: XX                                                                               *****//
//****                                                                                                        *****//  
//****--------------------------------------------------------------------------------------------------------*****//

 app.get("/:mvpversion", function (req, res) {
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
