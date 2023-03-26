import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Player from '../Components/Player';


const DashBoard = () => {
    const [playerList, setPlayerList] = useState();


    useEffect(() => {
        axios.get('http://localhost:8080/api/teams')
            .then((response) => {
                console.log(response.data);
                setPlayerList(response.data);
            })
            .catch((error) => console.log(error))
    }, [])
    const removeFromDom = (playerIdToDelete) => {
        setPlayerList(playerList.filter((player) => player._id !== playerIdToDelete))
    };






    return (
        <div>
            <div className='nav p-2'>
                <h2><Link to={'/player'} className='text-secondary'>Manage Players</Link> |</h2>
                <h2><Link to={'/status'} className='text-secondary'>Manage Player Status</Link></h2>
            </div>
            <div>
                <div className='view'>
                    <div className='nav p-2'>
                        <h4><Link to={'/player'}>List</Link> |</h4>
                        <h4><Link to={'/player/new'} >Add Player</Link></h4>
                    </div>
                    <table className="table table-hover table table-bordered  table-secondary">
                        <thead>
                            <tr>
                                <th scope="col">Players</th>
                                <th scope="col">Prefered Positions</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                playerList && playerList.map((player, idx) => <Player team={player} removeFromDom={removeFromDom} key={idx} />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}



export default DashBoard