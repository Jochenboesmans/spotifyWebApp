const mongoose = require('mongoose');
const { Schema } = mongoose;
const mongooseEncryption = require('mongoose-encryption');
const privateKey = require('../config/keys').mongooseEncryptionKey;

const userSchema = new Schema({
    spotifyID: String,
    accessToken: String
});

/* Encrypt the collection */
userSchema.plugin(mongooseEncryption, { secret: privateKey, excludeFromEncryption: ['spotifyID'] });

/* Create a mongoose model with the given Schema defined above */
mongoose.model('user', userSchema);