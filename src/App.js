import React from 'react'
import { Switch } from 'react-router-dom'
import { debounce } from 'lodash'
import PropsRoute from './utils/PropsRoute'
import * as BooksAPI from './BooksAPI'
import Root from './pages/Root'
import Search from './pages/Search'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
    search: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
  }

  onSearchQuery(query) {
    BooksAPI.search(query)
      .then(search => {
        this.setState({ search })
      })
      .catch(error => {
        this.setState({ search: [] })
      })
  }

  render() {
    const { books, search } = this.state

    return (
      <div className="app">
        <Switch>
          <PropsRoute exact path="/" component={Root} books={books} />
          <PropsRoute exact path="/search" component={Search} books={search} onSearchQuery={debounce((query) => { this.onSearchQuery(query) }, 500)} />
        </Switch>
      </div>
    )
  }
}

export default BooksApp
