//Load Required Packages
var User = require('../models/user');

//Create Endpoint api/users for POST
exports.postUsers = function(req,res,next){
	var user = new User({
		username:req.body.username,
		password: req.body.password
	});

	user.save(function(err){
		if(err){
			return next(err);
		}

		res.json({message:'New User Added'});
	});
};

//Create Endpoint api/users for GET
exports.getUsers = function(req,res){
	User.find(function(err,users){
		if(err){
			res.send(err);
		}

		res.json(users);
	});
};