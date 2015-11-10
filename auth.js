var basicAuth = require('basic-auth'),
    env = process.env.NODE_ENV || 'development',          
// Grab environment variables specified in Procfile or as Heroku config vars
    userId = process.env.USERNAME,
    pwd = process.env.PASSWORD;

/**
 * Simple basic auth middleware for use with Express 4.x.
 *
 * @example
 * app.use('/api-requiring-auth', utils.basicAuth('username', 'password'));
 *
 * @param   {string}   username Expected username
 * @param   {string}   password Expected password
 * @returns {function} Express 4 middleware requiring the given credentials
 */
exports.basicAuth = function(username, password) {
  return function(req, res, next) {
    var user = basicAuth(req);
        if(env === 'production') {
            if (!user || user.name !== userId || user.pass !== pwd) {
              res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
              return res.send(401);
            }
        }
    next();
  };
};
