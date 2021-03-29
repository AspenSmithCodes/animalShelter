import React, { useEffect, useState } from "react";
import {Link, navigate} from '@reach/router'; 
import axios from "axios";

const OnePet =(props) =>{
    

    const [pet, setPet] = useState({
        name: "",
        type:"",
        description:"",
        skill_1:"",
        skill_2:"",
        skill_3:""
        
    })
    
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${props.id}`)
        .then(res => setPet(res.data.pet))
        .catch(err=> console.log(err))
    },[props]);
    
    const onDeleteHandler =(_id) =>{
        axios.delete(`http://localhost:8000/api/pets/delete/${_id}`)
        .then(res => {
            console.log(res);
            navigate ("/pets/")
        })
        .catch(err => console.log(err))
    }
    
    

    
    
    
    return(
        <div className="container p-5">
            <button className="btn btn-danger" onClick= {() => onDeleteHandler(pet._id)}>Adopt {pet.name} </button>
            <h3>Details about {pet.name}</h3>
            <fieldset>
                <h4>Pet Type: {pet.type}</h4>
                <h4>Pet Description: {pet.description}</h4>
                <h4>Skills: <ul><li>{pet.skill_1}</li>
                        <li>{pet.skill_2}</li>
                        <li>{pet.skill_3}</li>
                        
                        </ul>
                    
                    
                    </h4>
            </fieldset>
            <br/>
            <Link className="btn btn-light" to="/pets/"> Back to Home </Link>
        </div>
    )
}
export default OnePet;