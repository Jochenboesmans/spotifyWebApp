const passport = require('passport');
const Strategy = require('passport-spotify').Strategy;
const config = require('../config');
const mongoose = require('mongoose');


/* Get the mongoose users collection model */
const UserModel = mongoose.model('user');

/* Only the user ID is saved in the session.
 */
passport.serializeUser((user, done) => {
  done(null, user.id);
});

/* How to retrieve user object from ID saved in the session.
 */
passport.deserializeUser(async (id, done) => {
  const user = await UserModel.findById(id);
  done(null, user);
});

passport.use(new Strategy(
  {
    clientID: config.spotifyClientID,
    clientSecret: config.spotifyClientSecret,
    callbackURL: config.passportCallbackURL,
    proxy: true
  },
  async (accessToken, refreshToken, expires_in, profile, done) => {
    try {
      console.log(profile.id);
      await UserModel.findOneAndDelete({spotifyID: profile.id});

      const newUser = await new UserModel({spotifyID: profile.id, accessToken: accessToken}).save();
      done(null, newUser);
    } catch (err) {
      console.log(err);
    }
  }
  )
);