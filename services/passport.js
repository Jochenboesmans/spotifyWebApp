const passport = require('passport');
const Strategy = require('passport-spotify').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');


/* Get the mongoose users collection model */
const UserModel = mongoose.model('user');

/* Make sure only the id of the user is persistent
    throughout the session.
 */
passport.serializeUser((user, done) => {
    console.log(user);
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await UserModel.findById(id, (err, user) => {
        done(err, user);
    });
});

passport.use(new Strategy(
    {
        clientID: keys.spotifyClientID,
        clientSecret: keys.spotifyClientSecret,
        callbackURL: "http://localhost:5000/auth/spotify/callback/",
        proxy: true
    },
    async (accessToken, refreshToken, expires_in, profile, done) =>
    {
        if (await UserModel.findOne( { spotifyID: profile.id } )) {
            UserModel.deleteOne( { spotifyID: profile.id } );
        }
        const newUser = await new UserModel( { spotifyID: profile.id, accessToken: accessToken } ).save();
        done(null, newUser);
    }
    )
);