// accessing Mongoose Package
const mongoose=require('mongoose');

// Database Connection
// mongoose.connect('mongodb://localhost:27017/library');
mongoose.connect('mongodb+srv://userone:userone@mycluster.jbbtv.mongodb.net/libraryapp?retryWrites=true&w=majority');

const Schema=mongoose.Schema;
const AuthorSchema=new Schema({
    author:String,
    works:String,
    genre:String,
    about:String,
    image:String
});

// Model Creation
var Authordata=mongoose.model('authordata',AuthorSchema);

// exporting the module
module.exports=Authordata;