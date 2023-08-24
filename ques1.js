const library = [
  	{ 
title: "The Great Gatsby", 
author: "F. Scott Fitzgerald", 
year: 1925,
pages: 180 
},
 	{
title: "To Kill a Mockingbird",
author: "Harper Lee", 
year: 1960, 
pages: 281
},
 	{
title: "1984", 
author: "George Orwell", 
year: 1949, 
pages: 328 
},
  	{
title: "Pride and Prejudice", 
author: "Jane Austen", 
year: 1813,
pages: 432 
} ];

//QUES1- Total Number of Pages: Write a function getTotalPages that calculates and returns the total number of pages in the library.

const reduceFun=(acc,cur) => acc + cur.pages;

let output= library.reduce(reduceFun,0);
console.log(output);


//QUES2- List of Book Titles: Write a function getBookTitles that returns an array containing only the titles of the books in the library.

let bookTitles=library.map((arr)=>arr.title);
console.log(bookTitles);


//QUES3- Books Published After a Given Year: Write a function getBooksPublishedAfterYear(year) that takes a year as a parameter and returns an array containing the titles of books published after that year.

function bookPublish(year){
    const book=library.filter((arr)=>arr.year>year);

    const bookTitle=book.map((arr)=>arr.title);

    console.log(bookTitle);
}
bookPublish(1948);


//QUES 4- Average Number of Pages: Write a function getAveragePages that calculates and returns the average number of pages across all books in the library.


const reduce2Fun=(acc,cur) => acc + cur.pages;

let output2= library.reduce(reduce2Fun,0);
console.log(output2/library.length);


//QUES 5- Longest Book: Write a function getLongestBook that returns the title of the book with the most pages.

const reduce3Fun=(acc,cur) => acc = acc>cur.pages?acc:cur.pages;
let output3= library.reduce(reduce3Fun,0);

let output4=library.filter((arr)=>arr.pages==output3);

let output5=output4.map((arr)=>arr.title);
console.log(output5);

//QUES6 - Authors and Their Books: Write a function getAuthorsAndBooks that returns an object where the keys are author names and the values are arrays of book titles written by each author.

const getAuthorsAndBooks = () => {
	let authorAndBook = library.reduce((acc, item) => {
	  acc[item.author] = [item.title];
	  return acc;
	}, {});
	return authorAndBook;
  };
  
  console.log(getAuthorsAndBooks());


  //QUES 7 -Total Number of Pages by Author: Write a function getTotalPagesByAuthor that returns an object where the keys are author names and the values are the total number of pages of books written by each author.

  const getTotalPagesByAuthor = () => {

	let totalPagesByAuthor = library.reduce((acc,item)=>{
	  acc[item.author] = item.pages
	  return acc
	},{})
	return totalPagesByAuthor
  }
  
  console.log("total Pages by Author =", getTotalPagesByAuthor())


  //QUES 8- Advanced: Filter and Map: Write a function getShortestBookByAuthor that returns an object where the keys are author names and the values are the titles of the shortest book written by each author.

