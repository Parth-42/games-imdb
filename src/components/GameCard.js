import React from 'react'
import '../styles/GameCard.css'

const GameCard = ({name, img}) => {
    return (
        <>
            <div id="card">
                <img src={img} alt={name}/>
                <h3>{name}</h3>
            </div>
        </>
    )
}

export default GameCard
