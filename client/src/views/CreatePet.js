import React, { useState } from "react";
import {Link, navigate} from '@reach/router'; 
import axios from "axios";


const CreatePet =(props) =>{
    

    const [form, setForm] = useState({
        name: "",
        type:"",
        description:"",
        skill_1:"",
        skill_2:"",
        skill_3:""
        
    })
    const [nameError, setNameError] =useState("")

    const nameValid = (str) =>{
        if(str.length < 3)
            setNameError("must be at least 3 characters");

        else
            setNameError("");

    }

    const onChangeHandler =(event) =>{
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
        if (event.target.name === "name"){
            nameValid(event.target.value);

        
        }
        

    }
    
    const onSubmitHandler =(event) => {
        event.preventDefault();
        axios.post("http://localhost:8000/api/pets/new", form)
        .then(res => {setForm(res.data.pet)
            console.log(res.data)
            navigate ("/pets/")
        })
        .catch(err => console.log(err))
    }
    
    return(
        <div className="container p-5">
            <h3>Know a pet needing a home?</h3>
            <form onSubmit={onSubmitHandler}>
                <div className ="form-group">
                    <label htmlFor="name">Pet Name:</label>
                    <input className="form-control col-5 mx-auto" name="name" type="text" onChange={onChangeHandler}/>
                    <span className="alert-danger">{nameError}</span>
                    
                    
                </div>
                <div className ="form-group">
                    <label htmlFor="name">Pet Type:</label>
                    <input className="form-control col-5 mx-auto" name="type" type="text" onChange={onChangeHandler}/>
                    <span className="alert-danger">{nameError}</span>
                    
                    
                </div>
                <div className ="form-group">
                    <label htmlFor="name">Pet Description:</label>
                    <input className="form-control col-5 mx-auto" name="description" type="text" onChange={onChangeHandler}/>
                    <span className="alert-danger">{nameError}</span>
                    
                    <p><b> <i> Skills (OPTIONAL): </i></b></p>
                </div>
                <div className ="form-group">
                    <label htmlFor="name">Skill 1:</label>
                    <input className="form-control col-5 mx-auto" name="skill_1" type="text" onChange={onChangeHandler}/>
                    
                    
                    
                </div>
                <div className ="form-group">
                    <label htmlFor="name">Skill 2:</label>
                    <input className="form-control col-5 mx-auto" name="skill_2" type="text" onChange={onChangeHandler}/>
                    
                    
                </div>
                
                <div className ="form-group">
                    <label htmlFor="name">Skill 3:</label>
                    <input className="form-control col-5 mx-auto" name="skill_3" type="text" onChange={onChangeHandler}/>
            
                </div>
                    <input type="submit" className="btn btn-primary" />
                
                
                
            </form>
            
            <Link className="btn btn-light" to="/pets/"> back to home </Link>
        </div>
    )
}
export default CreatePet;