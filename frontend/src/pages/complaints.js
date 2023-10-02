import axios from "axios";

import { useState,useEffect} from "react";
import { Link } from "react-router-dom";

import Dashboard from "../component/dashboard"
function Notes(){

const [stories,setStories]=useState([])
const getAllNotes =()=>{
    axios.get("http://localhost:3000/stories").then((response)=>{
        setStories(response.data)
      
    }).catch((error)=>{
        console.log(error)
    })

}

useEffect(()=>{
    getAllNotes()
},[])






    return <div className="mange-comp">
<Dashboard/>
<div className="boxes">
 {
    stories.map((notes,index)=>(
        <Link to={`/noteDetails/${notes._id}`}>
        <div className="box"> 
        <h4>{notes.date}</h4>
        <h4>{notes.name}</h4>
            <h4>{notes.title}</h4>
            <p>{notes.description.substring(0,250)+"......"}</p>
        </div>
       </Link>
    ))
 }

</div>

    </div>
}

export default Notes;             