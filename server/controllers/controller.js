const { Team } = require('../models/model');



module.exports.getAll = (req, res) => {
    Team.find()
    .then((dbRes) => {
        res.json(dbRes);
    })
    .catch((dbError) => {
        res.status(400).json('This is my Get all route', dbError)
    })
}


module.exports.create = (req, res) => {

    Team.create(req.body)
    .then((dbRes) => {
        res.json(dbRes)
    })
    .catch((dbError) => {
        res.status(400).json(dbError)
    })
}



module.exports.getOne = (req, res) => {
    Team.findOne({ _id: req.params.id })
    .then((dbRes) => {
        res.json(dbRes)
    })
    .catch((dbError) => {
        res.status(400).json(dbError)
    })

}


module.exports.updateOne = (req, res) => {
    Team.findOneAndUpdate({ _id: req.params.id }, req.body, { 
        new: true,
        runValidators: true,
    })
    .then((dbRes) => {
        res.json(dbRes)
    })
    .catch((dbError) => {
        res.status(400).json(dbError)
    })

}

module.exports.deleteOne = (req, res) => {
    Team.deleteOne({ _id: req.params.id })
    .then((dbRes) => {
        res.json(dbRes)
    })
    .catch((dbError) => {
        res.status(400).json(dbError)
    })
}


























