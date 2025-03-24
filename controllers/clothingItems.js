const ClothingItem = require("../models/clothingItems");
const { errorHandler } = require("../utils/errors");

const getItems = (req, res) => {
  ClothingItem.find({})
    .then((items) => res.send(items))
    .catch((err) => {
      errorHandler(req, res, err);
    });
};

const createItem = (req, res) => {
  const { name, weather, imageUrl } = req.body;

  ClothingItem.create({ name, weather, imageUrl, owner: req.user._id })
    .then((item) => res.status(201).send(item))
    .catch((err) => {
      errorHandler(req, res, err);
    });
};

const deleteItem = (req, res) => {
  ClothingItem.findByIdAndDelete(req.params.itemId)
    .orFail()
    .then((item) => {
      if (req.params.itemId === req.user._id) {
        //dunno if I added this correctly
        res.send(item);
      }
    })
    .catch((err) => {
      errorHandler(req, res, err);
    });
};

const likeItem = (req, res) => {
  ClothingItem.findByIdAndUpdate(
    req.params.itemId,
    { $addToSet: { likes: req.user._id } },
    { new: true }
  )
    .orFail()
    .then((item) => res.send(item))
    .catch((err) => {
      errorHandler(req, res, err);
    });
};

const dislikeItem = (req, res) => {
  ClothingItem.findByIdAndUpdate(
    req.params.itemId,
    { $pull: { likes: req.user._id } }, // remove _id to the array if it's not there yet
    { new: true }
  )
    .orFail()
    .then((item) => res.send(item))
    .catch((err) => {
      errorHandler(req, res, err);
    });
};

module.exports = { getItems, createItem, deleteItem, likeItem, dislikeItem };
