import React, { useEffect, useState } from 'react';
import axios from 'axios';

import {Link, navigate} from '@reach/router' 

const AllPets= (props) => {
    const [pets, setPets]= useState ([]);

    const [loaded, setLoaded] = useState(false);
    

    useEffect(()=>{
        axios.get("http://localhost:8000/api/pets/")
            .then(res => {
                setPets(res.data.pets)
                setLoaded(true)})

            .catch(err =>console.log (err))
    },[loaded])

    const onUpdateHandler = (_id) => {
        navigate(`update/${_id}`)
    }
    const onDetailsHandler =(_id) =>{
        navigate(`/pets/${_id}`)
    }
    
    return(
         <div>
             <Link to="/pets/new"> add a pet to the shelter </Link>
            <h3>These pets are looking for a good home.</h3>
        <table className="table table-succes table-hover">
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Actions</th>
            </tr>
            
                {pets.map((pet, key)=>{
                    return <tr key={key}> 
                                <td>{pet.name}</td>
                                <td>{pet.type}</td>
        
                                <td>
                                    
                                    
                                    <button className="btn btn-info" onClick={()=> onDetailsHandler(pet._id)}> Details </button> 
                                    <button className="btn btn-info" onClick={()=> onUpdateHandler(pet._id)}> Edit </button> 

                                    
                                </td>
                                
                            </tr>
                           
                })} 
                
            
        </table>
        
            
                
        </div>
    )
}

export default AllPets; 