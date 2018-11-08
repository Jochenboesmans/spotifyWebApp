/* Preamble importing among others
express, mongoose, passport modules.
 */
const express = require('express');
const app = express();

const mongoose = require('mongoose');
const keys = require('./config/keys');

const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

/* Connect MongoDB to mongoose */
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

/* Body parser middleware, makes json-parsed request
 bodies available for other middleware at req.body */
app.use(bodyParser.json());

/* Initialize a cookie session that lasts 30 days */
app.use(
    cookieSession({
        // 30 days in milliseconds
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

/* Initialize passport and enable its persistent login sessions,
 * essentially storing the received user id through passport in
  * the cookie of the client. */
app.use(passport.initialize());
app.use(passport.session());

/* Create mongoose models for MongoDB */
require('./models/user');

/* Configure passport for application */
require('./services/passport'); //

/* Run express routes, effectively handling all traffic to server */
require('./routes/index')(app);

/* Handle react route requests
if (process.env.NODE_ENV === 'production') {
    // Make Express serve front-end assets in react build
    app.use(express.static('client/build'));


    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}*/

/* Server listening on port provided by process environment
with default value of 5000.
 */
const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log("Express-side of SpotifyApp is now listening at port 5000.");

module.exports = app;

