import { useState } from 'react';
import SearchBar from './components/Searchbar';
import ImageList from './components/ImageList'
import SearchImages from './api'

function App() {
    const [images, setImage] = useState([])

    const handleSubmit = async (term) => {
        let result = await SearchImages(term)
        setImage(result)
    }

    return (
        <div>
            <SearchBar searchForImages={handleSubmit} />
            <ImageList images={images} />
        </div >
    )
}

export default App