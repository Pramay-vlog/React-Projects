import { useState } from 'react';
import "./css/searchbar.css"

function SearchBar({ searchForImages }) {
    const [term, setTerm] = useState('')

    const handleFormSubmit = (event) => {
        event.preventDefault()

        searchForImages(term)
    }

    const handleInputChange = (event) => {
        setTerm(event.target.value)
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit} >
                <input className='input' value={term} onChange={handleInputChange} />
            </form>
        </div>
    )
}

export default SearchBar