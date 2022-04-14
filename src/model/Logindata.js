// accessing Mongoose Package
const mongoose=require('mongoose');

// Database Connection

// mongoose.connect('mongodb://localhost:27017/library');
mongoose.connect('mongodb+srv://userone:userone@mycluster.jbbtv.mongodb.net/libraryapp?retryWrites=true&w=majority');

// Schema defnition
const Schema=mongoose.Schema;
const LoginSchema=new Schema({
    email:String,
    password:String
});

// Model Creation
var Logindata=mongoose.model('logindata',LoginSchema);

// exporting the module
module.exports=Logindata;