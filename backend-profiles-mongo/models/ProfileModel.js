const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const profileSchema = new Schema({
    firstName : String,
    lastName : String,
    email : String,
    jobTitle : String,
    twitter : String,
    avatarUrl : String,
}, {timestamps:true});

const Profile = mongoose.model('Profile',profileSchema);

module.exports = {Profile}