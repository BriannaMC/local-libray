function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
} //passed!

function sortAccountsByLastName(accounts) {
  return accounts.sort((nameA, nameB) => (nameA.name.last > nameB.name.last ? 1 : -1)) ;
}//passed!

function getTotalNumberOfBorrows(account, books) {
  const checked = books.filter(book => book.borrows.some(borrow => borrow.id === account.id))
  return checked.length
}//passed!

function getBooksPossessedByAccount(account, books, authors) {
  const borrowing = books.filter((book) => {
    return book.borrows.find(
      (person) => person.id == account.id && person.returned == false
    );
  });

  const findAuthor = (id) => {
    return authors.find((writer) => writer.id == id);
  };

  return borrowing.map((book) => {
    return {
      ...book,
      author: findAuthor(book.authorId),
    };
  });
}




module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
