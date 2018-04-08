import React from 'react'
import { Switch } from 'react-router-dom'
import PropsRoute from './utils/PropsRoute'
import * as BooksAPI from './BooksAPI'
import Root from './pages/Root'
import Search from './pages/Search'
import './App.css'

class BooksApp extends React.Component {
  constructor(props) {
    super(props)

    this.onSearchQuery = this.onSearchQuery.bind(this)
  }

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
  }

  onSearchQuery(query) {
    BooksAPI.search(query).then(books => {
      this.setState({ books })
    })
  }

  render() {
    const { books } = this.state

    return (
      <div className="app">
        <Switch>
          <PropsRoute exact path="/" component={Root} books={books} />
          <PropsRoute exact path="/search" component={Search} books={books} onSearchQuery={this.onSearchQuery} />
        </Switch>
      </div>
    )
  }
}

export default BooksApp
