import BookShow from "./BookShow";

function BookList({ books, onDelete, onEdit }) {
    const bookList = books.map((book, id) => {
        return <BookShow key={id} book={book} onDelete={onDelete} onEdit={onEdit} />
    })

    return (
        <div className='book-list' >
            {bookList}
        </div>
    )
}

export default BookList;