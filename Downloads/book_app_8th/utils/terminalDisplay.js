//imports used for file reading/writing, calling utility functions and prompt for output/input.
import fs from 'fs';
import { findUsername, writeIntoDatabase, colourText } from './utils.js';
import promptSync from 'prompt-sync';

//prompt allow the use of input/output to the terminal.
//sigint allows the process to exit when you enter ctrl + c
const prompt = promptSync({ sigint: true });

/*function updates the database with the users book additions will outputing -
messages to the terminal for book selection and update messages. */
function updateBookshelf(username, response, save) {
  /*receives an input from the fetchFromApi() function in the fetch.js file 
  letting it know if the user wants to save their book or exit.*/
  if (save === '2') {
    //outputs colourful goodbye text if user lwishes to exit the process
    console.log(
      `${colourText('Bye,', 'blue')} ${colourText(
        'Thank you',
        'yellow'
      )} ${colourText('for visiting', 'red')} ${colourText(
        '8th Shelf :D',
        'green'
      )}`
    );
  } else if (save === '1') {
    //if users select '1' then tge following asks for the user to input a Book ID
    prompt(
      colourText(
        "enter the book id for the book you'd like to save to your reading list. (Click Enter)",
        'magenta'
      )
    );
    let selection = prompt(
      colourText(
        'Enter Book ID here (only enter number in the following range [0-4]):',
        'magenta'
      )
    );

    //a variable storing the formatted response to be added to a new users object.
    let dataRes = { readingList: [`${[response[selection]]}`] };

    // reads database.json file and returns data parsed from JSON to JS.
    fs.readFile('database.json', 'utf8', function (err, data) {
      let obj = JSON.parse(data);

      /* checks if the user's username already exists. 
      If the username doesn't exist then the readingList obj is added to datanbas.json 
      as a value of their username */
      if (findUsername(obj, username).length == 0) {
        obj.users[username] = dataRes;
        //final formatted data is written into the database
        writeIntoDatabase(obj);
      } else {
        /* If the username does exist then the response is pushed into the readingList array  */
        obj.users[username].readingList.push(response[selection]);

        writeIntoDatabase(obj);
      }
    });
  } else {
    // if the user enters the wrong option it exists.
    console.log(
      colourText(
        `Error : You\'ve entered the wrong input.
    Restart by entering : 'npm run play' 
    Try again and enter either 1 or 2 `,
        'red'
      )
    );
  }
  // log allows user to know that their book has been added to their shelf and greets them goodbye.
  console.log(
    colourText(
      `\nYour Book was added to your shelf, restart the app to view your shelf. 
      \n${colourText('Bye,', 'blue')} ${colourText(
        'Thank you',
        'yellow'
      )} ${colourText('for visiting', 'red')} ${colourText(
        '8th Shelf :D',
        'green'
      )} `,
      'magenta'
    )
  );
}

//function calls to the database.json file and logs the readingList obj to the terminal.
async function fetchReadingList(username) {
  fs.readFile('database.json', 'utf8', function (err, data) {
    let shelf = JSON.parse(data);

    console.log(
      colourText(
        `\n ${colourText(`${username}`, 'cyan')} here's your Reading List : \n`,
        'magenta'
      ),
      shelf.users[username].readingList
    );
  });
  return Promise.resolve('');
}

export { updateBookshelf, fetchReadingList };
