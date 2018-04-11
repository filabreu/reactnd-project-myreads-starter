/**
* @description Represents a book
* @constructor
* @param {object} props - The props of the book
*/

import React from 'react'

const Book = ({ book, onShelfChange }) => {
  const { authors, title, subtitle, imageLinks } = book
  let { shelf } = book

  if (!shelf)
    shelf = 'none'

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${imageLinks && imageLinks.thumbnail}")` }}></div>
          <div className="book-shelf-changer">
            <select value={shelf} onChange={(event) => { onShelfChange(book, event.currentTarget.value) }}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">
          {title}
          {subtitle && ` - ${subtitle}`}
        </div>
        <div className="book-authors">
          {authors && authors.map((author, i) => (
            <div key={i}>{author}</div>
          ))}
        </div>
      </div>
    </li>
  )
}

export default Book
