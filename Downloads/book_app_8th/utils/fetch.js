import { returnBookSelection } from './terminalDisplay.js';
import { findUsername } from './utils.js';
import fetch from 'node-fetch';

export default function fetchFromApi(title, author, username, key) {
  let response;
  fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${title}+inauthor:${author}&${key}&maxResults=5`
  )
    .then((response) => response.json())
    .then((data) => {
      response = data.items.map(
        (e) => `{
            title:${
              !e.volumeInfo.title ? 'No title found' : e.volumeInfo.title
            },
            author:${
              !e.volumeInfo.authors ? 'No Author found' : e.volumeInfo.authors
            },
            company:${
              !e.volumeInfo.publisher
                ? 'Publisher not found'
                : e.volumeInfo.publisher
            },
       }`
      );

      console.log(response.map((e) => `Book ID :${response.indexOf(e)} ${e}`));
      returnBookSelection(username, response);
    })
    .catch((err) => console.log(err));
}
