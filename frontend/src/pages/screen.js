
import { useEffect, useState } from "react";
import Dashboard from "../component/dashboard";
import axios from "axios";


function Screen() {
  
 


    const [totalUsers, SetTotalUsers] = useState("");
   
    const getTotalUsers = () => {
        axios.get("http://localhost:3000/total").then((response) => {
            SetTotalUsers(response.data.data)
        })
    }

   




    useEffect(() => {
        getTotalUsers()
      
    }, [])






    return <div className="screen" >

        <Dashboard />
        <div className="ba1">

            <div className="div1">
                
            </div>
            <div className="div2">
                <h1>Total users </h1>
                <h1>{totalUsers}</h1>
            </div>
            <div className="div1">
           
               

            </div>

        </div>

    </div>
}
export default Screen;

