const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// mongoose.connect('mongodb://localhost:27017/ylf', { useNewUrlParser: true }).then(() => {
//   console.log('Connected to the Database successfully')
// });

const registered_userSchema = new mongoose.Schema({
    name:String,
    dob:String,
    address:String,
    district:String,
    phone_no:String,
    whatzup_no:String,
    email:String
});

module.exports = mongoose.model("registered_userSchema",registered_userSchema)