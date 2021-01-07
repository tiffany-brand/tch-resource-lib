const db = require("../models");

module.exports = {
    findAll: (req, res) => {
        db.Resource
            .find(req.query)
            .then(dbResult => res.status(200).json(dbResult))
            .catch(err => res.status(422).json(err));
    },
    create: (req, res) => {
        db.Resource
            .create(req.body)
            .then(dbResult => res.status(200).json(dbResult))
            .catch(err => res.status(422).json(err));
    }
}