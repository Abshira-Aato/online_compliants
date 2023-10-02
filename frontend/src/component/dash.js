




import {AiFillHome} from "react-icons/ai"
import { NavLink } from "react-router-dom"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



function Dash(){
    const navigate=useNavigate()

    useEffect(()=>{
        if(!localStorage.getItem('admin')){
            navigate("/logout")
        }
    },[])

    return<div className="lama">
        <div className="Home-dash">
<ul>
<button><NavLink to={"/"}><AiFillHome/>Home</NavLink></button>

<li><NavLink  to={"/logout"} onClick={()=>{
    localStorage.removeItem('admin')
}} >Logout</NavLink></li>

</ul>


</div>
<button className="CBUT"><NavLink to={"/createcom"}>create complaint</NavLink></button>
    </div>
   
}
export default Dash;