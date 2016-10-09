var mongoose=require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  email: {type: String, unique: true, lowercase: true},
  facebook: String,
  tokens: Array,
  profile: {
    name: {type: String, default:''},
    picture: {type: String, default:''}
  }
});

module.exports = mongoose.model('User', UserSchema);
