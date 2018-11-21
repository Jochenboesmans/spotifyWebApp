const requireLogin = require('../middleware/requireLogin');
const accessSpotifyAPI = require('../middleware/accessSpotifyAPI');

module.exports = (app) => {
  app.get('/api/top-artists', requireLogin, accessSpotifyAPI);
  app.get('/api/top-tracks', requireLogin, accessSpotifyAPI);
  app.get('/api/current-user-profile', requireLogin, accessSpotifyAPI);
};