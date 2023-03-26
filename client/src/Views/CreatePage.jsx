
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from "react-router-dom";

import PlayerForm from '../Components/PlayerForm';


const CreatePage = () => {
    const nav = useNavigate();
    const { id } = useParams();


    const formSubmit = (newPlayer) => {
        axios.post('http://localhost:8080/api/teams', newPlayer)
        .then((response) => {
                console.log(response);
                nav(`/player`);
            })
            .catch((error) => {
                console.log(error.response);
                console.log(error.response.data.errors);
            })
    }


    return (
        <div>
            <div className='nav p-2'>
                <h2><Link to={'/'} className='text-secondary'>Manage Players</Link> |</h2>
                <h2><Link className='text-secondary'>Manage Player Status</Link></h2>
            </div>
            <div className='view'>
                <div className='nav p-2'>
                    <h4><Link to={'/player'}>List</Link> |</h4>
                    <h4><Link >Add Player</Link></h4>
                </div>
                <div>
                    <PlayerForm  team={{  name: '', position: ''   }} formSubmit={formSubmit} /> 
                </div>
            </div>
        </div>
    )
}



export default CreatePage