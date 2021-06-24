// dependency to help with output/input
import promptSync from 'prompt-sync';
// function that makes a fetch request to the google books API.
import fetchFromApi from './utils/fetch.js';
// function reads the databas.json file to render back a user's reading list.
import { fetchReadingList } from './utils/terminalDisplay.js';
//util fnctions used to help minimise repeated code.
import {
  colourText,
  errorMessage,
  correctString,
  userOptions,
} from './utils/utils.js';

//initialising promptSync.
const prompt = promptSync({ sigint: true });

//calls userOptions function containing interchangeable options for the user to choose from.
userOptions(
  'If you would like to create a shelf and save a book  :',
  'If you have a book shelf and would like to view it :',
  'Welcome to the 8th Shelf :D'
);

let choice = prompt(colourText('Enter Here :', 'green'));

if (choice === '1') {
  let title = prompt(colourText('What is the name of the book ? ', 'cyan'));
  //corrcetString function removes unescaped characters.
  title = correctString(title);

  let author = prompt(colourText("What is the author's name ?", 'cyan'));
  author = correctString(author);

  let username = prompt(colourText('What is your username ? ', 'cyan'));
  username = correctString(username);

  //condition to ensure that user enters a string into each field.
  if (title && author && username) {
    fetchFromApi(title, author, username);
  } else {
    errorMessage('Try again and enter either 1 or 2');
  }
} else if (choice === '2') {
  let username = prompt(colourText('What is your username ?', 'cyan'));
  fetchReadingList(username);
} else {
  errorMessage('Try again and enter either 1 or 2');
}
