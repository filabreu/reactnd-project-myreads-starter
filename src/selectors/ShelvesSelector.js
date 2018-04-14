export const setShelves = (books) => {
  const shelves = books.reduce((obj, book) => {
    obj[book.shelf] = obj[book.shelf] || []
    obj[book.shelf].push(book)
    return obj
  }, {})

  return shelves
}

export const changeShelf = (shelves, book, shelvesLayout) => {
  const newShelf = Object.keys(shelvesLayout).find(shelf => ( shelvesLayout[shelf].includes(book.id) ))

  if (book.shelf)
    shelves[book.shelf] = shelves[book.shelf].filter(shelfBook => ( shelfBook.id !== book.id ))

  book.shelf = newShelf
  shelves[newShelf].push(book)

  return shelves
}

export const setShelftoBooks = (shelves, books) => {
  books = books.map(book => {
    let shelf = Object.keys(shelves).find(shelf => ( shelves[shelf].map(i => (i.id)).includes(book.id) ))

    book.shelf = shelf || 'none'

    return book
  })

  return books
}

