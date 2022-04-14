// accessing Mongoose Package
const mongoose=require('mongoose');

// Database Connection
// mongoose.connect('mongodb://localhost:27017/library');
mongoose.connect('mongodb+srv://userone:userone@mycluster.jbbtv.mongodb.net/libraryapp?retryWrites=true&w=majority');

// Schema defnition
const Schema=mongoose.Schema;
const BookSchema=new Schema({
    title:String,
    author:String,
    genre:String,
    about:String,
    image:String
});

// Model Creation
var Bookdata=mongoose.model('bookdata',BookSchema);

// exporting module
module.exports=Bookdata;