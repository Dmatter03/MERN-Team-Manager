import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


import Game from '../Components/Game';



const GamePage = () => {
    const [playerList, setPlayerList] = useState();
    
    const { id } = useParams();
    useEffect(() => {
        axios.get('http://localhost:7000/api/teams')
            .then((response) => {
                console.log(response.data);
                setPlayerList(response.data);
            })
            .catch((error) => console.log(error))
    }, [])

    return (
        <div>
            <div className='nav p-2'>
                <h2><Link to={'/'} className='text-secondary'>Manage Players</Link> |</h2>
                <h2><Link to={'/status'} className='text-secondary'>Manage Player Status</Link></h2>
            </div>
            <div className='view'>
                <div className='nav p-2 text-center'>
                    <h1>Player Status</h1>
                </div>
                <div className='d-flex justify-content-center' >
                    <h4><Link to={'/status'}>Game 1</Link> |</h4>
                    <h4><Link to={'/status'} >Game 2</Link> |</h4>
                    <h4><Link to={'/status'}>Game 3</Link> |</h4>
                </div>
                <div>
                <table className="table table-hover table table-bordered  table-secondary">
                        <thead>
                            <tr>
                                <th scope="col">Players</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                playerList && playerList.map((player, idx) => <Game team={ player } key={idx}   /> )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}



export default GamePage