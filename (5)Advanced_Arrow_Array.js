const books = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', ratings: 5 },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', ratings: 4.5 },
  { title: '1984', author: 'George Orwell', ratings: 4.7 },
  { title: 'The Catcher in the Rye', author: 'J.D. Salinger', ratings: 4 },
  { title: 'Moby-Dick', author: 'Herman Melville', ratings: 3.5 },
];

//Filter - Ratings Higher Than 4
// const ratedBooks = books.filter(book => book.ratings > 4)
// console.log(ratedBooks)

//Map - Title only
// const title = books.map(book => book.title)
// console.log(title)

//Find + Arrow Function - Find the book that has title '1984' and return
//full book object
// const findTitle = books.find(book => book.title == '1984')
// console.log(findTitle)

//Sort - Using the .sort() method and arrow functions,
// return a new array that sorts the books by their ratings in descending order.
// const sortBook = books.sort(book => book.rating);
// console.log(sortBook)


//Chaining Methods - Using a combination of array methods,
//  find the title of the book with the highest ratings
// const chainBook = books.sort((a,b) => b.ratings - a.ratings)[0].title
// console.log(chainBook)