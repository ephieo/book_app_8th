import { updateBookshelf, fetchReadingList } from './terminalDisplay.js';
import fetch from 'node-fetch';
import { colourText, formatBookResult, userOptions } from './utils.js';
import promptSync from 'prompt-sync';

const prompt = promptSync({ sigint: true });

//function that handles fetch requests.
export default function fetchFromApi(title, author, username, key) {
  //defining a variable to save the fetch response to.
  let response;
  fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${title}+inauthor:${author}&${key}&maxResults=5`
  )
    //parsing the response to json
    .then((response) => response.json())
    .then((data) => {
      //if the book is not found it returns an error message instead of returning undefined.
      //it checks the amount of totalItems found in the response if zero it returns the message below.
      if (data.totalItems === 0) {
        console.log(
          colourText(
            'Sorry no books match your query. Please try again :D',
            'red'
          )
        );
      } else {
        /*if the query returns a result then the resulting data is passed into the formatBookResult() 
     function that returns said data in a {title:data,author:data,company:data} format*/
        response = formatBookResult(data);
        //this outputs the returned formatted data to the console with a Book ID attached to that users can choose book.
        console.log(
          response.map((e) => `Book ID :${response.indexOf(e) + 1} ${e}`)
        );
        userOptions('To save your book to your shelf  :', 'To Exit : ');

        let save = prompt(colourText('Enter Here :', 'cyan'));
        //it then passes this response data and users username to the returnBookSelection() function.
        //this function calls on the returnReadingList(username) function after checking if their username exists.
        updateBookshelf(username, response, save);
      }
    })
    .catch((err) => console.log(err));
}
