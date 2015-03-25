//Load Required Packages
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');

//Controllers
var objectController = require('./controllers/object');
var userController = require('./controllers/user');
var authController = require('./controllers/auth');

//Connect to the Development Framework MongoDB
mongoose.connect('mongodb://localhost:27017/DevFramework');

//Compression Package - Adding gzip compression to content served
var compression = require('compression');

//Create Express Application
var app = express();

// Body Parser
app.use(bodyParser.urlencoded({
 extended: true
}));

//One day Caching on content
var cacheTimeInMS = 86400000;
//Static Middleware
app.use(express.static(__dirname + '/public',{maxAge:cacheTimeInMS}));

//Using Compression on Response headers
app.use(compression());

//Use the passport package in application
app.use(passport.initialize());

// Create Express Router
var router = express.Router();

//Initial dummy Route
router.get('/',function(req,res){
 res.end('Development Framework v0.0.1');
});

//Create endpoint handlers for /api/objects
router.route('/objects')
  .post(authController.isAuthenticated,objectController.postObjects)
  .get(authController.isAuthenticated,objectController.getObjects);

//Create endpoint handlers for /api/objects/:object_id
router.route('/objects/:object_id')
  .get(authController.isAuthenticated,objectController.getObject)
  .put(authController.isAuthenticated,objectController.putObject)
  .delete(authController.isAuthenticated,objectController.deleteObject);

//Create endpoint handlers for /api/users
router.route('/users')
	.post(userController.postUsers)
	.get(authController.isAuthenticated,userController.getUsers);

//Register all routers with /api
app.use('/api', router);

//Start Server
app.listen(3000);


