// libraries to help with output/input and
import promptSync from 'prompt-sync';
import dotenv from 'dotenv';
import fetchFromApi from './utils/fetch.js';
import { fetchReadingList } from './utils/terminalDisplay.js';
import {
  colourText,
  errorMessage,
  correctString,
  userOptions,
} from './utils/utils.js';

dotenv.config();

let key = process.env.API_KEY;

const prompt = promptSync({ sigint: true });

//calls userOptions function containing interchangeable options for the user to choose from.
userOptions(
  'If you would like to create a shelf and save a book  :',
  'If you have a book shelf and would like to view it :',
  'Welcome to the 8th Shelf :D'
);

let choice = prompt(colourText('Enter Here :', 'cyan'));

if (choice === '1') {
  let title = prompt(colourText('What is the name of the book ? ', 'magenta'));
  title = correctString(title);

  let author = prompt(colourText("What is the author's name ?", 'magenta'));
  author = correctString(author);

  let username = prompt(colourText('What is your username ? ', 'magenta'));
  username = correctString(username);

  if (title && author && username) {
    fetchFromApi(title, author, username, key);
  } else {
    errorMessage('Try again and enter either 1 or 2');
  }
} else if (choice === '2') {
  let username = prompt(colourText('What is your username ?', 'magenta'));
  fetchReadingList(username);
} else {
  errorMessage('Try again and enter either 1 or 2');
}
