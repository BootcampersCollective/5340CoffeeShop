var mongoose = require('mongoose'),
    bcrypt = require('bcryptjs');

var userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true
  },
  password: String,
  Created: {
    type: Number,
    default: ()=> Date.now()
  }
});

userSchema.pre('save', function(next){
  var user = this;

  if(!user.isModified('password')){
    return next();
  }

  bcrypt.genSalt(10, (saltErr,salt)=>{
    if(saltErr){
      return next(saltErr);
    }

    bcrypt.hash(user.password, salt, (hashErr,hashedPassword)=>{
      if(hashErr){
        return next(hashErr);
      }
      user.password = hashedPassword;
      next();
    });
  });
});

module.exports = mongoose.model('bcUsers', userSchema);