import React from 'react'
import { Link } from 'react-router-dom'
import Book from '../components/Book'
import SearchInput from '../components/Search'

const Search = ({ books, onSearchQuery, onShelfChange }) => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">Close</Link>
        <div className="search-books-input-wrapper">
          <SearchInput onSearchQuery={onSearchQuery} />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
        { books.map(book => (
          <Book book={book} key={book.id} onShelfChange={onShelfChange} />
        )) }
        </ol>
      </div>
    </div>
  )
}

export default Search
