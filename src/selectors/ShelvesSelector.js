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

