const ClothingItem = require("../models/clothingItems");

module.exports.getItems = (req, res) => {
  ClothingItem.find({})
    .populate("items")
    .then((items) => res.send({ data: items }))
    .catch(() =>
      res.status(404).send({ message: "Requested resource not found" })
    );
};

module.exports.createItem = (req, res) => {
  const { name, weather, imageUrl, ownerId } = req.body;

  ClothingItem.create({ name, weather, imageUrl, owner: ownerId })
    .then((item) => res.send({ data: item }))
    .catch(() =>
      res.status(404).send({ message: "Requested resource not found" })
    );
};

module.exports.deleteItem = (req, res) => {
  ClothingItem.findByIdAndRemove(req.params.id)
    .then((item) => res.send({ data: item }))
    .catch(() =>
      res.status(404).send({ message: "Requested resource not found" })
    );
};
