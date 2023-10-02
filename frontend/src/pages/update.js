import { useState ,useEffect} from "react"
import { ToastContainer,toast} from 'react-toastify';

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";





function UpdateForm(){
    const[date,setDate]=useState("")
    const[name,setName]=useState("")
const [title,setTitle]= useState("")
const [description,setDescription]= useState("")
const params =useParams()
const navigate =useNavigate()

const getSingleData= ()=>{
    console.log(params.id)
    axios.get(`http://localhost:3000/stories/${params.id}`).then((response)=>{
        setDate(response.data[0].date)
        setName(response.data[0].name)
        setTitle(response.data[0].title)
        setDescription(response.data[0].description)
    }).catch((error)=>{
        console.log(error)
      })
    }

useEffect(()=>{
    getSingleData()
},[])



const UpdateNotes =(event)=>{

    event.preventDefault()

    axios.put(`http://localhost:3000/stories/update/${params.id}`,{
        "date":date,
        "name":name,
    "title": title,
    "description":description
}).then((response)=>{

    toast("Data updated sucessfully!",{
        onClose: () =>  navigate("/complaints"),
        position:"top-right",
        autoClose:1000,
        hideProgressBar:false,
     });
}).catch((error)=>{
    console.log(error)
})
}












return<div className="comp">

<div className="formd">
<form>
<input type="text" placeholder="Date" value={date}  onChange={(event)=>{
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
<button onClick={UpdateNotes}>save</button>
<ToastContainer
/>
</form>

</div>


</div>


}
export default UpdateForm;