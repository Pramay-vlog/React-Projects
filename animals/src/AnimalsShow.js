import { useState } from 'react';
import './css/AnimalShow.css' 
import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import horse from './svg/horse.svg';
import aligator from './svg/gator.svg';
import heart from './svg/heart.svg'

const imageMap = {
    bird,
    cat,
    cow,
    dog,
    horse,
    aligator
}

function AnimalShow({ type }) {
    const [click, setClick] = useState(0);

    function handleClick() {
        setClick(click + 1);
    }

    return (
        <div className='animal-show' onClick={handleClick}>
            <img className='animal' alt='Animal' src={imageMap[type]} width='50px' />
            <img className='heart' alt='heart' src={heart} style={{ width: 10 + 10 * click + 'px' }} />
        </div>
    )
}

export default AnimalShow;