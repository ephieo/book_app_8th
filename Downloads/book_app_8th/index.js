// libraries to help with output/input and
import promptSync from 'prompt-sync';
import dotenv from 'dotenv';
import fetchFromApi from './utils/fetch.js';
import { fetchReadingList } from './utils/terminalDisplay.js';
import { colourText } from './utils/utils.js';

dotenv.config();

let key = process.env.API_KEY;

const prompt = promptSync();

let choice = prompt(
  colourText(
    `  Welcome to the 8th Shelf :D \n\n
          --------------------------------------------------------
          If you would like to create a shelf and save a book  :\n
          ${colourText('ENTER 1', 'bgYellow')}\n
          --------------------------------------------------------
          If you have a book shelf and would like to view it : \n
          ${colourText('ENTER 2', 'bgYellow')}\n `,
    'magenta'
  )
);

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

// let continueOn = prompt(
//   ' - Enter 1 to view your Reading list \n\n - Enter 2 to exit \n\n'
// );
// if (continueOn == '1') {
//   fetchReadingList();
// } else {
//   console.log('Bye Thank you for visiting 8th Shelf :D');
// }
