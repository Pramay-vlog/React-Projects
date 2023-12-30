import { useState, useEffect } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import './index.css'
import axios from 'axios'

function App() {
    const [books, setBooks] = useState([]);

    /* create Book */
    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books', { title })

        const createBook = [...books, response.data]
        setBooks(createBook)
    }

    /* Get Book */
    const fetchBooks = async (req, res) => {
        const response = await axios.get('http://localhost:3001/books')
        setBooks(response.data)
    }

    useEffect(() => {
        fetchBooks()
    }, [])

    /* update Book */
    const editBook = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle
        })

        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, ...response.data }
            }
            return book; // if no id matched!
        })

        setBooks(updatedBooks)
    }

    /* delete Book */
    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`)

        const updateBooks = books.filter((book) => {
            return book.id !== id;
        })
        setBooks(updateBooks)
    }

    return (
        <div>
            <BookList books={books} onDelete={deleteBookById} onEdit={editBook} />
            <BookCreate onCreate={createBook} />
        </div>
    )
}

export default App;