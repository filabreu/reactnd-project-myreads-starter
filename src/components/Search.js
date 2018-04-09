import React from 'react'

/*
  NOTES: The search from BooksAPI is limited to a particular set of search terms.
  You can find these search terms here:
  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
  you don't find a specific author or title. Every search is limited by search terms.
*/

class Search extends React.Component {
  state = {
    query: ''
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query)
      this.props.onSearchQuery(this.state.query)
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  render() {
    const { query } = this.state

    return (
      <input type="text" placeholder="Search by title or author" value={query} onChange={event => { this.updateQuery(event.target.value) }} />
    )
  }
}

export default Search
