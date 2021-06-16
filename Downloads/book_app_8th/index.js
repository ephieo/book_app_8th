// libraries to help with output/input and
import promptSync from 'prompt-sync';
import dotenv from 'dotenv';
import fetchFromApi from './utils/fetch.js';
import { fetchReadingList } from './utils/terminalDisplay.js';
import { colourText } from './utils/utils.js';

dotenv.config();

let key = process.env.API_KEY;

const prompt = promptSync({ sigint: true });

console.log(
  colourText(
    `  Welcome to the 8th Shelf :D 

          --------------------------------------------------------

          If you would like to create a shelf and save a book  :

          ${colourText('ENTER 1', 'bgWhite')}

          --------------------------------------------------------

          If you have a book shelf and would like to view it : 

          ${colourText('ENTER 2', 'bgWhite')}
          
          `,
    'magenta'
  )
);

let choice = prompt(colourText('Enter Here :', 'cyan'));

if (choice === '1') {
  let title = prompt(colourText('What is the name of the book ? ', 'magenta'));

  let author = prompt(colourText("What is the author's name ?", 'magenta'));

  let username = prompt(colourText('What is your username ? ', 'magenta'));

  fetchFromApi(title, author, username, key);
} else if (choice === '2') {
  let username = prompt(colourText('What is your username ?', 'magenta'));
  fetchReadingList(username);
} else {
  console.log(colourText('Error try again and enter either 1 or 2 ', 'red'));
}
