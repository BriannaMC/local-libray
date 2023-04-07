function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
} //passed!

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}//passed!

function partitionBooksByBorrowedStatus(books) {
  const notReturned = [];
  const isReturned = [];
  let result = [];
 books.forEach((book) =>  {
   const bookReturned = book.borrows[0].returned;
   
    if(bookReturned){
      notReturned.push(book)
    }else {
      isReturned.push(book)
    }
  });
  result.push(isReturned);
  result.push(notReturned);
  return result;
}//passed!

function getBorrowersForBook(book, accounts) {
  let borrowers = [];
  let authorData = {};
  let result = [];
  book.borrows.forEach((borrow) => {
    authorData = accounts.find((author) => author.id === borrow.id);
    newObject = {
      ...borrow,
      ...authorData
    };
    borrowers.push(newObject);
  })
  
  if (borrowers.length <= 10){
    for(let i =0; i< borrowers.length; i++){
      result[i] = borrowers[i]
    }
  }else{
    for(let i = 0; i< 10; i++){
      result[i] = borrowers[i]
    }
  }
  return result
}//passed!

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
