import { useState } from 'react';
import AnimalShow from './AnimalsShow';
import './css/App.css';

function getRandomAnimal() {
    const animals = ['cow', 'dog', 'cat', 'horse', 'aligator', 'bird']
    return animals[Math.round(Math.random() * animals.length)]
}

function App() {
    const [animal, setAnimal] = useState([]);

    function handleClick() {
        setAnimal([...animal, getRandomAnimal()])
    }

    const renderedAnimals = animal.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />
    });

    return (
        <div className='app' >
            <button className='btn' onClick={handleClick} >Add Animal</button>
            <div className='animal-list' >{renderedAnimals}</div>
        </div>
    )
}

export default App;