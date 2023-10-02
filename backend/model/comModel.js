const mongoose= require("mongoose");

const NoteSchema= mongoose.Schema({
    date: String,
    name: String,
    title:String,
     description:String,
  
 
   



})
module.exports=mongoose.model("stories",NoteSchema)
