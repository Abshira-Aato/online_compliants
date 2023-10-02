import Dashboard from "../component/dashboard"
import axios from "axios";
import { useEffect, useState } from "react";

import 'react-toastify/dist/ReactToastify.css';



function ManageUsers(){
    const [Users, setUsers] = useState([]);
   
    const getAllUsers = () => {
        axios.get("http://localhost:3000/Users").then((response) => {
            setUsers(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }


    useEffect(() => {
        getAllUsers()
    }, [])

    const  deleteStudent=(id)=>{
        axios.delete(`http://localhost:3000/Users/delete/${id}`).then((respose)=>{
            getAllUsers()
            alert("deleted user")
        }).catch((error)=>{
            console.log(error)
        })
    }


    return<div className="manUser-paarent">


<div>
<Dashboard/>
</div>
<div className="classdiv">
<div className="clasmain">


    <table>
        <tr>


            <th>
                Username
            </th>
            <th>
                Email
            </th>
            <th>
             password
            </th>

        </tr>
        {
            Users.map((data, index) => (
                <tr key={index}>
                    <td>{data.username}</td>
                    <td>{data.email}</td>
                    <td>{data.password}</td>
                    <td><button className="bott1"  onClick={()=>deleteStudent(data._id)}>Delete</button></td>
                  

                </tr>
            ))

        }
        
    </table>


</div>

</div>
    </div>
}
 export default ManageUsers;