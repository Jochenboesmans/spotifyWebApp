const requireLogin = require('../middleware/requireLogin');

const mongoose = require('mongoose');
const UserModel = mongoose.model('user');

const urlBuilder = require('../util/urlBuilder');
const axios = require('axios');


module.exports = (app) => {
    /* Get top artists from Spotify API*/
    app.get('/api/top-artists', requireLogin, async (req, res) => {
        const user = await UserModel.findById(req.user.id);
        const accessToken = user.accessToken;

        const response = await axios({
            method: 'get',
            url: urlBuilder(`https://api.spotify.com/v1/me/top/artists/`, req.query),
            headers: { 'Authorization': `Bearer ${accessToken}` }
        });

        res.send(response.data.items);
    });

    /* Get top tracks from Spotify API*/
    app.get('/api/top-tracks', requireLogin, async (req, res) => {
        const user = await UserModel.findById(req.user.id);
        const accessToken = user.accessToken;

        const response = await axios({
            method: 'get',
            url: urlBuilder(`https://api.spotify.com/v1/me/top/tracks/`, req.query),
            headers: { 'Authorization': `Bearer ${accessToken}` }
        });

        res.send(response.data.items);
    });
};