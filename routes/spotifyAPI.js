const requireLogin = require('../middleware/requireLogin');
const mongoose = require('mongoose');

const UserModel = mongoose.model('user');

const request = require('request');
const urlBuilder = require('../util/urlBuilder');


module.exports = (app) => {
    /* Get top artists from Spotify API*/
    app.get('/top-artists', requireLogin, async (req, res) => {
        const user = await UserModel.findById(req.user.id);
        const accessToken = user.accessToken;

        const headers = {
            'Authorization': `Bearer ${accessToken}`
        };
        const options = {
            url: urlBuilder(`https://api.spotify.com/v1/me/top/artists/`, req.query),
            headers: headers
        };

        request(options, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                res.send(body);
            }
        });
    });

    /* Get top tracks from Spotify API*/
    app.get('/top-tracks', requireLogin, async (req, res) => {
        const user = await UserModel.findById(req.user.id);
        const accessToken = user.accessToken;

        const headers = {
            'Authorization': `Bearer ${accessToken}`
        };
        const options = {
            url: urlBuilder(`https://api.spotify.com/v1/me/top/tracks/`, req.query),
            headers: headers
        };

        request(options, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                res.send(body);
            }
        });
    });
};