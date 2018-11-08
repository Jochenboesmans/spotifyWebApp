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
        const existingUser = await UserModel.findOne( { spotifyID: profile.id } );
        if (existingUser) {
            /* User exists in DB already */
            done(null, existingUser);
        } else {
            /* No user with the given profile id exists in DB yet
                => create new record with for user
             */
            const newUser = await new UserModel( { spotifyID: profile.id, accessToken: accessToken } ).save();
            done(null, newUser);
        }
    }
    )
);