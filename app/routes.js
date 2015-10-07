

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
    
      
//****--------------------------------------------------------------------------------------------------------*****//
//****                                                                                                        *****//
//****    Prototype Version: 22                                                                               *****//
//****                                                                                                        *****//  
//****--------------------------------------------------------------------------------------------------------*****//

var protoVersionPath= "22";
 app.get("/"+protoVersionPath, function (req, res) {
      res.render(protoVersionPath+'/index');
    });  
      
      
//********************************
// Start routes
//********************************
      
    app.get('/'+protoVersionPath+'/start_persephone', function (req, res) {
      res.render(protoVersionPath+'/start/start_persephone1');
    });       
      
     app.get('/'+protoVersionPath+'/tsandcs', function (req, res) {
      res.render(protoVersionPath+'/start/tsandcs');
    });       
// End Start routes
      
      
//******************************** 
// Dashboard routes
//********************************
      
    app.get('/'+protoVersionPath+'/dashboard-persephone-gaps1', function (req, res) {
      res.render(protoVersionPath+'/dashboard/dashboard-persephone-gaps1');
    });
      
      
// End Dashboard routes    
    
//********************************
// NI routes
//********************************
    
    app.get('/'+protoVersionPath+'/ni/ni-persephone-full5', function (req, res) {
      res.render(protoVersionPath+'/ni/ni-persephone-full5');
    });
      
    app.get('/'+protoVersionPath+'/ni/ni-persephone-fuller', function (req, res) {
      res.render(protoVersionPath+'/ni/ni-persephone-fuller');
    });      

    app.get('/'+protoVersionPath+'/ni/ni-check', function (req, res) {
      res.render(protoVersionPath+'/ni/ni-check');
    });
      
    app.get('/'+protoVersionPath+'/ni/basket-toolate/:year', function (req, res) {        
          res.render(protoVersionPath+'/ni/basket-toolate',{"year": req.params.year});
    });
      
    app.get('/'+protoVersionPath+'/ni/basket-improve/:year/pay/:amount', function (req, res) {        
          res.render(protoVersionPath+'/ni/basket-improve',{"year": req.params.year,"amount":req.params.amount});
    });
    app.get('/'+protoVersionPath+'/ni/basket-improve-emp-benefits/:year/pay/:amount/emp/:empAmount/ben/:benefitNum', function (req, res) {        
          res.render(protoVersionPath+'/ni/basket-improve-emp-benefits',{"year": req.params.year,"amount":req.params.amount,
                    "empAmount": req.params.empAmount, "benefitNum": req.params.benefitNum});
    });      
    
    app.get('/'+protoVersionPath+'/ni/basket-improve-all/:year/pay/:amount/emp/:empAmount/ben/:benefitNum', function (req, res) {        
          res.render(protoVersionPath+'/ni/basket-improve-all',{"year": req.params.year,"amount":req.params.amount,
                    "empAmount": req.params.empAmount, "benefitNum": req.params.benefitNum});
    });         
      
// End NI routes        
    
    
  }
};
