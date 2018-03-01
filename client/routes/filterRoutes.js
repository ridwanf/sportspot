module.exports = (app) => {
  app.post('/api/current_address', (req, res) => {
    req.geocoder.geocode({ location: req.latlng }, (address) => {
      res.send(address);
    });
  });
};

