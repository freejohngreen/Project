import React from 'react'
import axios from "axios";
import {useEffect, useState} from "react";

function Home() {
    const[listofRequest, setListOfRequest] = useState([]);

    useEffect(() =>{
      axios.get("http://localhost:3001/Maintenanceform").then((response)=>{
        setListOfRequest(response.data)
        }   
    )})
  
   //Lines 15-32 This block of code interacts with the database
    return (
        <div>
   
       {listofRequest.map((value, key) => {
        return(
          <div className="Maintenance">
          <div className = "First Name">
            {value.First_Name}
          </div>
          <div className="Last Name">{value.Last_Name}</div>
          <div className="Maintenance Request">{value.Maintenance_Request}</div>
          </div>
          
      )})}
            
        </div>
    )
    }


export default Home

