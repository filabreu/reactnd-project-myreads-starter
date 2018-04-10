import React from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from '../components/Bookshelf'

const Root = (props) => {
  const { books } = props

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <Bookshelf books={books} key='currentlyReading' name='currentlyReading' title='Currently Reading' />
        <Bookshelf books={books} key='wantToRead' name='wantToRead' title='Want to Read' />
        <Bookshelf books={books} key='read' name='read' title='Read' />
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  )
}

export default Root
