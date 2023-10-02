const mongoose= require("mongoose");

const NoteSchema= mongoose.Schema({
    name: String,
    age:Number,
    phone:Number,
    address:String,
    parentName:String,
    className:String,
    fvSubject:String,
   



})
module.exports=mongoose.model("students",NoteSchema)
