import React from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from '../components/Bookshelf'

const Root = ({ shelves, onShelfChange }) => {
  const { currentlyReading, wantToRead, read } = shelves

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <Bookshelf books={currentlyReading} key='currentlyReading' name='currentlyReading' title='Currently Reading' onShelfChange={onShelfChange} />
        <Bookshelf books={wantToRead} key='wantToRead' name='wantToRead' title='Want to Read' onShelfChange={onShelfChange} />
        <Bookshelf books={read} key='read' name='read' title='Read' onShelfChange={onShelfChange} />
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  )
}

export default Root
