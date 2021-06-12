import promptSync from 'prompt-sync';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import { returnBookSelection, findUsername } from './utils/utils.js';

dotenv.config();

let key = process.env.API_KEY;

const prompt = promptSync();

let response;

let title = prompt('What is the name of the book ? ');
//console.log(title);

let author = prompt("What is the author's name ? ");
//console.log(author);

let username = prompt('What is your username ? ');

fetch(
  `https://www.googleapis.com/books/v1/volumes?q=${title}+inauthor:${author}&${key}&maxResults=5`
)
  .then((response) => response.json())
  .then((data) => {
    response = data.items.map(
      (e) => `{
        title:${!e.volumeInfo.title ? 'No title found' : e.volumeInfo.title},
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
