const errorHandler = (err, req, res, next) => {
  res.status(400).send({
    message: err.message,
    stack: err.stack,
  });

  next();
};

module.exports = errorHandler;
