const passport = require('passport');

const requireLogin = require('../middleware/requireLogin');
const mongoose = require('mongoose');

const UserModel = mongoose.model('user');

const fetch = require('node-fetch');

module.exports = (app) => {
    /* Get access to user's top artists and tracks info on Spotify servers */
    app.get('/auth/spotify',
        passport.authenticate('spotify',
            {scope: ['user-read-private', 'user-read-birthdate', 'user-read-email', 'streaming',
                    'app-remote-control', 'user-top-read', 'user-read-recently-played',
                    'user-library-modify', 'user-library-read', 'playlist-read-collaborative',
                    'playlist-modify-private', 'playlist-modify-public', 'playlist-read-private',
                    'user-read-currently-playing', 'user-read-playback-state', 'user-modify-playback-state',
                    'user-follow-modify', 'user-follow-read']}), (req, res) => {}
    );

    /* Response upon successful Spotify authentication */
    app.get('/auth/spotify/callback',
        passport.authenticate('spotify', { failureRedirect: '/auth/spotify' }), (req, res) => {
            res.redirect('/');
    });

    /* Logout the current user (essentially deleting their cookie) */
    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

    /* Basic handler for fetching current user */
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });

    /* Root route, gets access token tied to currently logged in user and fetches data from Spotify API */
    app.get('/', requireLogin, async (req, res) => {
        /* TODO: Make fetch work */
        const accessToken = await UserModel.findById(req.user.id).select('accessToken');

        res.send(fetch("https://api.spotify.com/v1/me/top/artists", {
            headers: { Authorization: "Bearer " + accessToken }
        }));
    });
};