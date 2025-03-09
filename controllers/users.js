const User = require("../models/user");

module.exports.getUsers = (req, res) => {
  User.find({})
    .populate("user")
    .then((users) => res.send({ data: users }))
    .catch(() =>
      res.status(500).send({ message: "Requested resource not found" })
    );
};

module.exports.getUser = (req, res) => {
  User.findById(userId) // not sure how to do this
    .populate("user")
    .then((users) => res.send({ data: users }))
    .catch(() =>
      res.status(500).send({ message: "Requested resource not found" })
    );
};

module.exports.createUser = (req, res) => {
  const { name, avatar } = req.body;

  User.create({ name, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) => res.status(500).send({ message: err.message }));
};
