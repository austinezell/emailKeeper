var Mongoose= require('mongoose');

var emailSchema = Mongoose.Schema({
  name: String,
  email: {type: String, required: true}
})

var Email = Mongoose.model("Email", emailSchema)

module.exports = Email
