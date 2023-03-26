import React from "react";
import axios from "axios";





const DeleteButton = ({ team, successCallback }) => {


    const deletePlayer = () => {
        axios.delete(`http://localhost:7000/api/teams/${team._id}`)
        .then((response) => {
            console.log(response);
            successCallback();
        })
        .catch((err) => console.log(err));
    };





    return <button className="btn btn-success" onClick={deletePlayer}>Delete</button>;
};


export default DeleteButton