import { useEffect, useState } from "react";
import {MdDelete}from "react-icons/md"
import{BiEdit}from "react-icons/bi"
import { useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"
function NoteDetail (){
    const[noteDetail,setNoteDetail] =useState([])
    const navigate = useNavigate()

    const params =useParams();

    const getSingleData =() =>{
      axios.get(`http://localhost:3000/stories/${params.id}`).then((response)=>{
      setNoteDetail(response.data)
      }).catch((error)=>{
        console.log(error)
      })
    }



    useEffect(()=>{
        getSingleData()
    },[])

const deleteNotes =()=>{
    axios.delete(`http://localhost:3000/stories/delete/${params.id}`).then((response)=>{
        toast("Data deleted sucessfully!",{
            onClose: () =>  navigate("/complaints"),
            position:"top-right",
            autoClose:1000,
            hideProgressBar:false,
         });
      }).catch((error)=>{
        console.log(error)
      })
}






    return<div className="NoteDetails">

      

{
    noteDetail.map((note,index)=>(
        <div className="note1">
          <h3>{note.name}</h3>
          <h3>{note.date}</h3>
            <h2>{note.title}</h2>
            <p>{note.description}</p>
     
            <hr></hr>
            <div className="note2">
            <div><Link to={`/update/${note._id}`}><button><BiEdit/></button></Link><button onClick={deleteNotes}><MdDelete/></button>
            </div>
       
          
          </div>
            <ToastContainer
/>                                 
        </div>
    ))
}


    </div>
}
export default NoteDetail;