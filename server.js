var path = require('path'),
    express = require('express'),
    bodyParser = require('body-parser'),
    routes = require(__dirname + '/app/routes.js'),
    favicon = require('serve-favicon'),
    session = require('express-session'),
    morgan=require('morgan')('dev'),
    app = express(),
    nunjucks = require('nunjucks'),
    cookieParser = require('cookie-parser')(),
    bodyParser = require('body-parser').urlencoded({ extended: true }),
    port = (process.env.PORT || 8080),
// Grab environment variables specified in Procfile or as Heroku config vars
    username = process.env.USERNAME,
    password = process.env.PASSWORD,
    sessionKey = process.env.sessionKey || "ERieueijeeieiIUUXuxueue9UUU",
    env = process.env.NODE_ENV || 'development';

// Authenticate against the environment-provided credentials, if running
// the app in production (Heroku, effectively)
if (env === 'production') {
  if (!username || !password) {
    console.log('Username or password is not set, exiting.');
    process.exit(1);
  }
  app.use(express.basicAuth(username, password));
}

//nunjucks
nunjucks.configure('app/views', {autoescape: true, express   : app, noCache :true });

app.set('view engine', 'html');
app.set('views', __dirname + '/app/views');

// Middleware to serve static assets
app.use('/public', express.static(__dirname + '/public'));
app.use('/public', express.static(__dirname + '/govuk_modules/govuk_template/assets'));
app.use('/public', express.static(__dirname + '/govuk_modules/govuk_frontend_toolkit'));

app.use(morgan);
app.use(cookieParser);
app.use(bodyParser);

app.use(favicon(__dirname+'/govuk_modules/govuk_template/assets/images/favicon.ico')); 

app.use(session({ resave: false, saveUninitialized: false, secret: sessionKey, cookie: { maxAge: 60000000 }}))

// send assetPath to all views
app.use(function (req, res, next) {
  res.locals.assetPath="/public/";
  next();
});

// routes (found in app/routes.js)

routes.bind(app);

// auto render any view that exists

app.get(/^\/([^.]+)$/, function (req, res) {

	var path = (req.params[0]);

	res.render(path, function(err, html) {
		if (err) {
			console.log(err);
			res.sendStatus(404);
		} else {
			res.end(html);
		}
	});

});

// start the app

app.listen(port);
console.log('');
console.log('Listening on port ' + port);
console.log('');
