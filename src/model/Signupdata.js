// accessing Mongoose Package
const mongoose=require('mongoose');

// Database Connection
//mongoose.connect('mongodb://localhost:27017/library');
mongoose.connect('mongodb+srv://userone:userone@mycluster.jbbtv.mongodb.net/libraryapp?retryWrites=true&w=majority');

// Schema defnition
const Schema=mongoose.Schema;
const SignupSchema=new Schema({
    name:String,
    email:String,
    spassword:String
});

// Model Creation
var Signupdata=mongoose.model('signupdata',SignupSchema);

// exporting the module
module.exports=Signupdata;