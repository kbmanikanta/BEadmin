const mongoose = require('mongoose');
var uuid = require('node-uuid');
const Schema = mongoose.Schema;

const schema = new Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },
	hash: {type: String},
    email :{type: String},
    mobile :{type: String}, 
    sortorder: {type: String}, 
    userguid : {type: String,default: uuid.v1}, 
    role : {type: String}, 
    roleguid : {type: String,default: uuid.v1}, 
	
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('users', schema);