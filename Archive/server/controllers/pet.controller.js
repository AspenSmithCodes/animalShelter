const pet = require("../models/pet.model");

module.exports.findAllPets = (req, res) => {
  pet.find()
    .then(allDaPets => res.json({ pets: allDaPets }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSinglePet = (req, res) => {
	pet.findOne({ _id: req.params.id })
		.then(oneSinglePet => res.json({ pet: oneSinglePet }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewPet = (req, res) => {
  pet.create(req.body)
    .then(newlyCreatedPet => res.json({ pet: newlyCreatedPet }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingPet = (req, res) => {
  pet.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true,runValidators: true })
    .then(updatedPet => res.json({ pet: updatedPet }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingPet = (req, res) => {
  pet.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};