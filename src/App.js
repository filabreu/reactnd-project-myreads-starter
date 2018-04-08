import React from 'react'
import { Switch } from 'react-router-dom'
import PropsRoute from './utils/PropsRoute'
import * as BooksAPI from './BooksAPI'
import Root from './pages/Root'
import Search from './pages/Search'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
  }

  render() {
    const { books } = this.state

    return (
      <div className="app">
        <Switch>
          <PropsRoute exact path="/" component={Root} books={ books } />
          <PropsRoute exact path="/search" component={Search} books={ books } />
        </Switch>
      </div>
    )
  }
}

export default BooksApp
