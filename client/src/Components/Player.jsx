import React from "react";
import { Link } from "react-router-dom";


import DeleteButton from "./DeleteButton";



const Player = ({ team , removeFromDom }) => {


    return (
        
        <tr className="align-item-center">
            <td><Link >{team.name}</Link></td>
            <td>{team.position}</td>
            <td>
                <DeleteButton team={team} successCallback={() => removeFromDom(team._id)} />
            </td>
        </tr>
    );
};


export default Player