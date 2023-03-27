
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";




const PlayerForm = ({ team, formSubmit, formUnique  }) => {
    const [name, setName] = useState(team.name);
    const [position, setPosition] = useState(team.position);


    const handleSubmit = (e) => {
        e.preventDefault();


        formSubmit({
            name,
            position,
        });
    }

    return (
        <div className="p-3 mb-4 bg-secondary bg-opacity-10 border border-warning border-start-0 rounded-end ">
            <form onSubmit={handleSubmit} className='form'>
                <label htmlFor="playerName">Team Player</label>
                <input type='text' value={name} className='form-control' id="playerName" onChange={(e) => setName(e.target.value)} />
                {formUnique && <p className="text-danger"> Player must already be on your team! </p>}
                <label htmlFor="position">Perfered Position</label>
                <input type='text' value={position} className='form-control ' onChange={(e) => setPosition(e.target.value)} />
                <div className="submitButton text-end">
                    <button className="btn btn-outline-secondary" >Submit</button>
                </div>
            </form>
        </div>
    );

}

export default PlayerForm
