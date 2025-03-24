const {
  BAD_REQUEST,
  NOT_FOUND,
  DEFAULT,
  DUPLICATE,
} = require("./errorConstants");

function errorHandler(req, res, err) {
  console.error(err);
  if (err.name === "MongoServerError") {
    return res.status(DUPLICATE).send({ message: err.message });
  }
  if (err.name === "DocumentNotFoundError") {
    return res.status(NOT_FOUND).send({ message: err.message });
  }
  if (err.name === "ValidationError" || "Incorrect email or password") {
    return res.status(BAD_REQUEST).send({ message: err.message });
  }
  if (err.name === "CastError") {
    return res.status(BAD_REQUEST).send({ message: err.message });
  }

  return res.status(DEFAULT).send({ message: err.message });
}

module.exports = { errorHandler };
