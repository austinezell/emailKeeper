var Mongoose= require('mongoose');

var emailSchema = Mongoose.Schema({
  name: String,
  email: {type: String, required: true}
})

var Contact = Mongoose.model("Contact", emailSchema)

module.exports = Contact
