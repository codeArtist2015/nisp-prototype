var express = require('express');

var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride=require('method-override');
var cookieParser=require('cookie-parser');
var expressSession=require('express-session');
var app = express();
var router = express.Router();
var assetPath="/public/";


app.use(express.static(__dirname + assetPath));     // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                     // log every request to the console
app.use(bodyParser.urlencoded({ extended: false }))    // parse application/x-www-form-urlencoded
app.use(bodyParser.json())    // parse application/json
app.use(methodOverride());                  // simulate DELETE and PUT

app.use(assetPath, express.static(__dirname + '/public'));
app.use(assetPath, express.static(__dirname + '/govuk/public'));


// Application settings
app.engine('html', require(__dirname + '/lib/template-engine.js').__express);
app.set('view engine', 'html');
app.set('vendorViews', __dirname + '/govuk/views');
app.set('views', __dirname + '/views');


// POST params in urlencoded form
app.use(bodyParser.urlencoded({ extended: false }));

// Set up sessions
app.use(cookieParser());
app.use(expressSession({secret: '34d3iuud934yd8p23890p90.2890238d3y4'}));



// ROUTES
// ==============================================

// sample route with a route the way we're used to seeing it
router.get('/hello', function(req, res) {
    res.send('Hello World!');  
});

// home page route (http://localhost:8080)
router.get('/', function(req, res) {
    res.render('examples/elements/intro',{'assetPath' : assetPath});  
});

// sample page route (http://localhost:8080/sample)
router.get('/sample', function(req, res) {
    res.render('sample'); 
});


 /* Example pages */

router.get('/examples/template-partial-areas', function (req, res) {
    res.render('examples/template_partial_areas',{'assetPath' : assetPath});

});

    /* Elements pages */

router.get('/examples/elements/intro', function (req, res) {
    res.render('examples/elements/intro', {'assetPath' : assetPath });
});

router.get('/examples/elements/grid-layout', function (req, res) {
    res.render('examples/elements/grid_layout', {'assetPath' : assetPath });
});

router.get('/examples/elements/typography', function (req, res) {
    res.render('examples/elements/typography', {'assetPath' : assetPath });
});

router.get('/examples/elements/forms', function (req, res) {
    res.render('examples/elements/forms', {'assetPath' : assetPath });
});

router.get('/examples/elements/buttons', function (req, res) {
    res.render('examples/elements/buttons', {'assetPath' : assetPath });
});


// apply the routes to our application
app.use('/', router);


// start the app
app.listen(8080);   
console.log('Magic happens on port 8080');          // shoutout to the user

