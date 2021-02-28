import React, {useState, useEffect} from 'react'
import axios from 'axios'
import GameCard from '../components/GameCard'
import '../styles/GamesListScreen.css'


const GamesListScreen = () => {

    const [gamesList, setGamesList] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{

        const fetchData = async() => {
            const {data} = await axios.get(`https://api.rawg.io/api/games?key=2926d35640734750b09fc565e9339e23`)
            setGamesList(data.results)
            setLoading(false)
        }
        fetchData()

    },[])

    return (
        <div>
            <h1>Games</h1>
            {loading ? <h2>Loading...</h2> : 
                <ul id="list">
                {gamesList.map((game)=> (
                    <li key={game.id}><GameCard name={game.name} img={game.background_image}/></li>
                ))}
            </ul>
            }
            
        </div>
    )
}

export default GamesListScreen
