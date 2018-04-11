import React from 'react'
import { Switch } from 'react-router-dom'
import { debounce } from 'lodash'
import PropsRoute from './utils/PropsRoute'
import * as BooksAPI from './BooksAPI'
import Root from './pages/Root'
import Search from './pages/Search'
import ShelvesSelector from './selectors/ShelvesSelector'
import './App.css'

class BooksApp extends React.Component {
  state = {
    shelves: [],
    search: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      const shelves = ShelvesSelector(books)
      this.setState({ shelves })
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

  onShelfChange(book, shelf) {
    BooksAPI.update(book, shelf)
      .then(result => {
        console.log(result)
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const { shelves, search } = this.state

    return (
      <div className="app">
        <Switch>
          <PropsRoute
            exact
            path="/"
            component={Root}
            shelves={shelves}
            onShelfChange={(book, shelf) => { this.onShelfChange(book,shelf) }}
          />
          <PropsRoute
            exact
            path="/search"
            component={Search}
            books={search}
            onSearchQuery={debounce((query) => { this.onSearchQuery(query) }, 500)}
            onShelfChange={(book, shelf) => { this.onShelfChange(book,shelf) }}
          />
        </Switch>
      </div>
    )
  }
}

export default BooksApp
