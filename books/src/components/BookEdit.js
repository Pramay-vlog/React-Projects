import { useState } from 'react';

function BookEdit({ book, onTitleSubmit }) {
    const [title, setTitle] = useState(book.title)

    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        onTitleSubmit(book.id, title)
    }

    return <form className="book-edit" onSubmit={handleSubmit} >
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button is-primary" onSubmit={handleSubmit}>Save</button>
    </form>
}

export default BookEdit;