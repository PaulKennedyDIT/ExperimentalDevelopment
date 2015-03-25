//Load Required Packages
var Object = require('../models/object');

// Create Endpoint /api/objects for POST
exports.postObjects = function(req,res){
	//Create a new instance of the Object Model
	var object = new Object();

	//Set the object Properties that came from the POST Data
	object.name = req.body.name;
	object.type 	= req.body.type;
	object.quantifier	= req.body.quantifier;
  object.userId = req.user._id;

	//Save the object and check for errors
	object.save(function(err){
		if(err){
			res.send(err);
		}
		res.json({message: 'Object saved',data : object });
	});
};

//Create endpoint /api/object for GET
exports.getObjects = function(req,res){
	//Use the Object model to find all objects
	Object.find({userId: req.user._id},function(err,objects){
		if(err){
			res.send(err);
		}
		res.json(objects);
	});
};

// Create endpoint /api/Objects/:Object_id for GET
exports.getObject = function(req, res) {
  // Use the Object model to find a specific Object
  Object.findById({userId: req.user._id, _id:req.params.object_id}, function(err, object) {
    if (err){
      res.send(err);
    }

    res.json(object);
  });
};

// Create endpoint /api/Objects/:Object_id for PUT
exports.putObject = function(req, res) {
  // Use the Object model to find a specific Object
  Object.findById({userId: req.user._id, _id:req.params.object_id },{quantifier : req.body.quantifier}, function(err, object) {
    if (err){
      res.send(err);
    }

    // Update the existing Object quantity
    object.quantifier = req.body.quantifier;

    // Save the Object and check for errors
    object.save(function(err) {
      if (err){
        res.send(err);
    	 }
      res.json(object);
    });
  });
};

// Create endpoint /api/Objects/:Object_id for DELETE
exports.deleteObject = function(req, res) {
  // Use the Object model to find a specific Object and remove it
  Object.findByIdAndRemove({userId: req.user._id, _id: req.params.object_id}, function(err) {
    if (err){
      res.send(err);
    }

    res.json({ message: 'Object deleted' });
  });
};
