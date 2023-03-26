import React, { useState } from "react";
import { Link } from "react-router-dom";






const Game = ({ team }) => {
    const [status, setStatus] = useState(-1)


    return (

        <tr className="align-item-center">
            <td><Link >{team.name}</Link></td>
            <td className="p-3 d-flex justify-content-evenly">
                <input type="radio" className="btn-check " value={1} id={team._id} checked={status == 1} onClick={(e) => setStatus(e.target.value)} />
                <label className="btn btn-outline-success btn-lg" htmlFor={team._id}>Playing</label>
                <input type="radio" className="btn-check " value={0} id={team.name} checked={status == 0} onClick={(e) => setStatus(e.target.value)} />
                <label className="btn btn-outline-danger  btn-lg" htmlFor={team.name}>Not Playing</label>
                <input type="radio" className="btn-check" value={-1} id={team.createdAt} checked={status == -1} onClick={(e) => setStatus(e.target.value)} />
                <label className="btn btn-outline-warning btn-lg" htmlFor={team.createdAt}>Undecided</label>
            </td>
        </tr>
    );
};


export default Game