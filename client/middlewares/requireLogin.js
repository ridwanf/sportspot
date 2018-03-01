module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: 'You must log in' });
  }
  next();
  return res.status(200);
};
