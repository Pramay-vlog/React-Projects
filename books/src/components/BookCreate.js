import { useState } from "react";

function BookCreate({ onCreate }) {
    const [title, setTitle] = useState('')

    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()

        if (title.length <= 0) return;
        onCreate(title)
        setTitle('')
    }

    return (
        <div className="book-create" >
            <h3>Add a book</h3>
            <form onSubmit={handleFormSubmit} >
                <input className="input" onChange={handleChange} />
                <button className="button" onSubmit={handleFormSubmit} >Submit</button>
            </form>
        </div>
    )
}

export default BookCreate;