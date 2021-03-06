//imports used for file reading/writing, calling utility functions and prompt for output/input.
import fs from 'fs';
import promptSync from 'prompt-sync';
//utility functions to help extract repeated code.
import {
  colourText,
  updateDatabase,
  errorMessage,
  goodbyeMsg,
} from './utils.js';

//prompt allows the use of input/output to the terminal.
//sigint allows the process to exit immediately when you enter ctrl + c
const prompt = promptSync({ sigint: true });

/*function updates the database with the users book additions while outputing -
messages to the terminal for book selection and update messages. */
function updateBookshelf(username, response, save) {
  /*receives an input from the fetchFromApi() function in the fetch.js file 
  letting it know if the user wants to save their book or exit.*/
  if (save === '2') {
    //outputs colourful goodbye text if user lwishes to exit the process
    goodbyeMsg();
  } else if (save === '1') {
    //if users select '1' then tge following asks for the user to input a Book ID
    console.log(
      colourText(
        "Enter the book id for the book you'd like to save to your reading list. (Click Enter)",
        'cyan'
      )
    );
    let selection = prompt(
      colourText(
        'Enter Book ID here (only enter number in the following range [1-5]):',
        'cyan'
      )
    );
    selection = selection - 1;
    //function updates database.json with users newly added book.
    updateDatabase(response, selection, username);
    goodbyeMsg();
  } else {
    // if the user enters the wrong option it exists.
    errorMessage();
  }
  // log allows user to know that their book has been added to their shelf and greets them goodbye.
}

//function calls to the database.json file and logs the readingList obj to the terminal.
async function fetchReadingList(username) {
  fs.readFile('database.json', 'utf8', function (err, data) {
    let shelf = JSON.parse(data);

    if (shelf.users[username]) {
      console.log(
        colourText(
          `\n ${colourText(
            `${username}`,
            'green'
          )} here's your Reading List : \n`,
          'magenta'
        ),
        shelf.users[username].readingList
      );
    } else {
      errorMessage(
        'Re-enter your username or try creating a new reading list with another username'
      );
    }
  });
  return Promise.resolve('');
}

export { updateBookshelf, fetchReadingList };
