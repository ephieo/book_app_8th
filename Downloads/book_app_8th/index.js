// libraries to help with output/input and
import promptSync from 'prompt-sync';
import dotenv from 'dotenv';
import fetchFromApi from './utils/fetch.js';

dotenv.config();

let key = process.env.API_KEY;

const prompt = promptSync();

let choice = prompt(
  `  Welcome to the 8th Bookshelf :D \n\n
  --------------------------------------------------------
  If you have a book shelf and would like to view it : \n
  ENTER 1\n 
  --------------------------------------------------------
  If you would like to create a shelf and save a book  :\n
  ENTER 2\n`
);

if (choice === '2') {
  let title = prompt('What is the name of the book ? ');

  let author = prompt("What is the author's name ? ");

  let username = prompt('What is your username ? ');

  fetchFromApi(title, author, username, key);
}
