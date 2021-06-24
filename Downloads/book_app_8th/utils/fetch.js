import fetch from 'node-fetch';
import { handleUserRequest } from './utils.js';
import dotenv from 'dotenv';

dotenv.config();

let key = process.env.API_KEY;

//function that handles fetch requests.
export default function fetchFromApi(title, author, username) {
  //defining a variable to save the fetch response to.
  let response;
  fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${title}+inauthor:${author}&${key}&maxResults=5`
  )
    //parsing the response to json
    .then((response) => response.json())
    .then((data) => {
      handleUserRequest(data, response, username);
    })
    .catch((err) => console.log(err));
}
