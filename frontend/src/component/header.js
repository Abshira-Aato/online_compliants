import {Link}from "react-router-dom"

function Header (){

 
    
    return<div className="par">
        <div className="header">
            <h1>Online Complaints Management</h1>
        </div>
    <div className="parent">
<h1>Handling customer <br></br>complaints is easier now</h1>
<p>Every business needs an online complaint system that provides<br></br>
     multichannel capabilities,advanced reporting functionalities <br></br>
     as well as a platform for cross-functional collaboration  <br></br>and immediate customer feedback system. </p>
           <Link to={"/signIN"}> <button>sign Up</button></Link>
           <Link to={"/logout"}> <button>Login</button></Link>

           </div>


<div>

{/* <Link to="/" className="but1" >Students</Link>
<Link to="/addStudents" className="but2">Addstudent</Link> */}


</div>
</div>
 
}
export default Header;