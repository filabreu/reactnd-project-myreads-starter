import React from 'react'
import Book from './Book'

const Bookshelf = ({ books, title, name, onShelfChange }) => {
  const shelfBooks = books.filter(book => { return book.shelf === name })

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{ title }</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          { shelfBooks.map(book => (
            <Book book={book} key={book.id} onShelfChange={onShelfChange} />
          ))}
        </ol>
      </div>
    </div>
  )
}

export default Bookshelf
