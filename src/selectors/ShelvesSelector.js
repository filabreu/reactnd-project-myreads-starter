const ShelvesSelector = (books) => {
  const shelves = books.reduce((obj, book) => {
    obj[book.shelf] = obj[book.shelf] || []
    obj[book.shelf].push(book)
    return obj
  }, {})

  return shelves
}

export default ShelvesSelector
