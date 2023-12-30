import { useState } from 'react'
import BookEdit from './BookEdit';


function BookShow({ book, onDelete, onEdit }) {
    const [showEdit, setShowEdit] = useState(false);

    const handleDelete = () => {
        onDelete(book.id)
    }

    const handleEdit = () => {
        setShowEdit(!showEdit)
    }

    const handleSubmit = (id, newTitle) => {
        setShowEdit(false)
        onEdit(id, newTitle)
    }

    let content = <h3>{book.title}</h3>
    if (showEdit) {
        content = <BookEdit book={book} onTitleSubmit={handleSubmit}/>
    }

    return (
        <div className="book-show">
            <div>{content}</div>
            <div className="actions">
                <button className="edit" onClick={handleEdit}></button>
                <button className="delete" onClick={handleDelete}></button>
            </div>
        </div>
    )
}

export default BookShow;