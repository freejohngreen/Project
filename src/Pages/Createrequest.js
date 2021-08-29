import React from 'react'
import {Formik, Form, Field, ErrorMessage} from "formik"  //Imported the following packages yup and formik to create the form
import * as Yup from "yup"
import axios from "axios";

//The most important part of the project. This is what creates the maintenance request form 

function Createrequest() {
    const initialValues = {
        First_Name: "",
        Last_Name:"",
        Maintenance_Request:"",
    }
    //Lines 15-19 This block of code validate the form.
    const validationSchema = Yup.object().shape({
        First_Name: Yup.string().required() ,
        Last_Name: Yup.string().required(),
        Maintenance_Request: Yup.string().required(),
    })

    //Lines 21-24 This block of code is what sends the data to be insert into the data base.
    const onSubmit =(data)=>{
        axios.post("http://localhost:3001/Maintenanceform", data).then((response)=>{
            console.log("It Worked ")
            }) 
 
    }
    return (
        <div className ="createRequestPage">
            <Formik initialValues ={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form className = "formContainer">
                    <label>First Name:</label>
                    <ErrorMessage name ="First Name" component="span"/>
                    <Field id= "inputcreateRequest" name="First_Name" placeholder="(Ex. John)"/>

                    
                    <label>Last Name:</label>
                    <ErrorMessage name ="Last Name" component="span"/>
                    <Field id= "inputcreateRequest" name="Last_Name" placeholder="(Ex. Green)"/>

                    <label>Maintenance Request:</label>
                    <ErrorMessage name ="Maintenance Request" component="span"/>
                    <Field id= "inputcreateRequest" name="Maintenance_Request" placeholder="Write Here"/>

                    
                    <button type = "Submit">Create Request</button>
                </Form>
            </Formik>
            
            
        </div>
    )
}

export default Createrequest
