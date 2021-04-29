import React from 'react'
import CharacterItems from '../Characters/CharacterItems';

const CharacterGrid = ({ items, isLoading}) => {
    return isLoading ? (<h1>Loading...</h1>) : <section className="cards">
        {items.map(item => (
            <CharacterItems key={items.char_id} item={item}></CharacterItems>
        ))}
    </section>
}

export default CharacterGrid
