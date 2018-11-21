const mongoose = require('mongoose');
const UserModel = mongoose.model('user');

const urlBuilder = require('../util/urlBuilder');
const axios = require('axios');

module.exports = async (req, res) => {
  const user = await UserModel.findById(req.user.id);
  const accessToken = user.accessToken;

  let baseURL;
  switch (req.path) {
    case '/api/top-artists':
      baseURL = 'https://api.spotify.com/v1/me/top/artists/';
      break;
    case '/api/top-tracks':
      baseURL = 'https://api.spotify.com/v1/me/top/tracks/';
      break;
    case '/api/current-user-profile':
      baseURL = 'https://api.spotify.com/v1/me/';
      break;
    default:
      break;
  }

  const response = await axios({
    method: 'get',
    url: urlBuilder(baseURL, req.query),
    headers: {'Authorization': `Bearer ${accessToken}`}
  });

  res.send(response.data.items);
};