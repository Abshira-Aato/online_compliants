

import { useState } from "react";
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

function SignIn (){
    const [username,setUsername] =useState("")
    const [email,setEmail] =useState("")
    const [password,setPassword] =useState("")
    const navigate =useNavigate()
    const registerClass =(event) =>{
        event.preventDefault()
    axios.post("http://localhost:3000/singIN",{
   
        "username":username,
        "email":email,
        "password":password
       
    
    }).then((response)=>{
        toast(" sign up sucessfully",{
            onClose:()=> navigate("/user"),
            autoClose:1000,
            hideProgressBar:false,
            position:"top-right"
        })
    }).catch((error)=>{
        console.log(error)
    })
    
    }


  
    return<div className="part">

<div className="Sign-parent">
    <img src="../images/Cartoon-Images-PNG-Pic.png" alt="sing up purpose"/>
<form>
<input type="text"   required  placeholder="Username  (optional)" value={username} onChange={(event)=>{setUsername(event.target.value)}} /><br></br>
<input type="email" placeholder="Email (optional)" value={email} onChange={(event)=>{setEmail(event.target.value)}} /><br></br>
<input type="text" placeholder="password  (optional)" value={password}    onChange={(event)=>{setPassword(event.target.value)}}/><br></br>

<button onClick={registerClass}>Sign Up</button>

<ToastContainer/>

</form>

</div>


    </div>

}
export default SignIn;