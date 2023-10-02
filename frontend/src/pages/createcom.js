
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
function AddNoteform(){

const[date,setDate]=useState("")
const[name,setName]=useState("")
const[title,setTitle]= useState("")
const [description,setDescription]=useState("")
const navigate = useNavigate()

const getUserData =(event) => {
   

    event.preventDefault()

    axios.post("http://localhost:3000/story",{
    "date":date,
    "name":name,
    "title":title,
    "description":description
    
}).then((response)=>{
    console.log("data has been inserted secessfully")

     toast("Data Added sucessfully!",{
        onClose: () =>  navigate("/thank"),
        position:"top-right",
        autoClose:1000,
        hideProgressBar:false,
     });
   
}).catch((error)=>{
    console.log(error)
})

    console.log(date)
    console.log(name)
    console.log(title)
    console.log(description)
}


    return <div className="comp">


<div className="formd">
<form>
<input type="date" placeholder="DATE" value={date}  onChange={(event)=>{
    setDate(event.target.value)
}}/><br></br>
<input type="text" placeholder="Enter your (name or gender)" value={name}  onChange={(event)=>{
    setName(event.target.value)
}}/><br></br>
<input type="text" placeholder="Enter title" value={title}  onChange={(event)=>{
    setTitle(event.target.value)
}}/><br></br>


<textarea type="text" placeholder="Enter discription"  value={description} onChange={(event)=>{
    setDescription(event.target.value)
}}/><br></br>
<button onClick={getUserData}>save</button>
<ToastContainer
/>
</form>

</div>

</div>
}
export default AddNoteform;