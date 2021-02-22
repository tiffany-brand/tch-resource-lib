const db = require("../models");

module.exports = {
    findAll: (req, res) => {
        console.log(req.query);
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
    },
    search: (req, res) => {
        console.log(req.query.q)
        db.Resource
            .find(
                { $text: { $search: req.query.q } },
                { score: { $meta: "textScore" } }
            ).sort({ score: { $meta: "textScore" } })
            .then(dbResult => res.status(200).json(dbResult))
            .catch(err => res.status(422).json(err));
    }
}