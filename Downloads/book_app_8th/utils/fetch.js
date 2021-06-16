import { updateBookshelf, fetchReadingList } from './terminalDisplay.js';
import fetch from 'node-fetch';
import { colourText } from './utils.js';
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
        console.log('Sorry no books match your query. Please try again :D');
      }
      //if there are books found it returns the data formatted into the {title:data,author:data,publishingCompany:data} format .
      //each line uses a ternary statement to return the message 'No___found' instead of undefined.
      else {
        response = data.items.map(
          (e) => `{
              title:${
                !e.volumeInfo.title ? 'No title found' : e.volumeInfo.title
              },
              author:${
                !e.volumeInfo.authors ? 'No Author found' : e.volumeInfo.authors
              },
              publishingCompany:${
                !e.volumeInfo.publisher
                  ? 'Publisher not found'
                  : e.volumeInfo.publisher
              },
         }`
        );
        //this outputs the returned formatted data to the console with a Book ID attached to that users can choose book.
        console.log(
          response.map((e) => `Book ID :${response.indexOf(e)} ${e}`)
        );
        console.log(
          colourText(
            `  
  
                  --------------------------------------------------------
  
                  To save your book to your shelf  :
  
                  ${colourText('ENTER 1', 'bgWhite')}
                  --------------------------------------------------------
                  To Exit : 
  
                  ${colourText('ENTER 2', 'bgWhite')} 
                  
                  `,
            'magenta'
          )
        );
        let save = prompt(colourText('Enter Here :', 'cyan'));
        //it then passes this response data and users username to the returnBookSelection() function.
        //this function calls on the returnReadingList(username) function after checking if their username exists.
        updateBookshelf(username, response, save);
      }
    })
    .catch((err) => console.log(err));
}
