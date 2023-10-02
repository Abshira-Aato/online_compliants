import {BiSolidUser} from "react-icons/bi"
import {SiGoogletagmanager} from "react-icons/si"
import {MdCreateNewFolder} from "react-icons/md"
import {BiLogIn} from "react-icons/bi"
import {BiMessageDetail,BiSolidDashboard} from "react-icons/bi"
import {AiFillHome} from "react-icons/ai"
import { NavLink } from "react-router-dom"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard(){
    const navigate=useNavigate()

    useEffect(()=>{
        if(!localStorage.getItem('admin')){
            navigate("/logout")
        }
    },[])

 

    return<div className="left-parent">
        <div className="left-side">
<ul>
<li><NavLink to={"/"}><AiFillHome/>Home</NavLink></li>
<li> <NavLink to="/screen"><BiSolidDashboard className="Sicon"/>Dashboard</NavLink> </li>
<li><NavLink to={"/user"}><BiSolidUser className="icon1"/>User</NavLink></li>
<li><NavLink to={"/manageUsers"}><SiGoogletagmanager className="icon1"/>Manage Users</NavLink></li>
<li><NavLink to={"/complaints"}><SiGoogletagmanager className="icon1"/>Manage complaints</NavLink></li>
<li><NavLink to={"/createcom"}><MdCreateNewFolder className="icon1"/>create complaint</NavLink></li>
 {/* <li><NavLink to={"/messages"}><BiMessageDetail className="icon1"/>Message </NavLink></li> */}

<li><NavLink  to={"/logout"} onClick={()=>{
    localStorage.removeItem('admin')
}} ><BiLogIn className="icon1"/>Logout</NavLink></li>

</ul>
<div className="doc3">...</div>

</div>

    </div>
}
export default Dashboard;