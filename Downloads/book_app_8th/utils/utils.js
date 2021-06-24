import kleur from 'kleur';
import fs from 'fs';
import promptSync from 'prompt-sync';

import { updateBookshelf } from './terminalDisplay.js';

const prompt = promptSync({ sigint: true });

//------------------------------------------------------------------------------------------------------------------

/* This function takes in response takes formatted data from the so called "bookshelf" and the username of the user
to check if the users username exists  */

function findUsername(bookshelf, username) {
  let name = Object.keys(bookshelf.users).filter((e) => e === `${username}`);
  return !name ? errorMessage() : name;
}

//------------------------------------------------------------------------------------------------------------------

/*Function that colours text in the terminal*/
function colourText(text, colour) {
  let colouredText = kleur[colour](text);
  return colouredText;
}

//------------------------------------------------------------------------------------------------------------------

//function writes data into the database.json file.
function writeIntoDatabase(obj) {
  return fs.writeFileSync('database.json', JSON.stringify(obj));
}

//------------------------------------------------------------------------------------------------------------------

/* This function recieves formatted data from the handleUserRequest() function with the users username and 
choice from the choices of whether to save their book or exit the programme*/
function updateDatabase(response, selection, username) {
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
}

//------------------------------------------------------------------------------------------------------------------

function errorMessage(message) {
  console.log(
    colourText(
      `
  Error : You\'ve entered the wrong input.
  Restart by entering : 'npm run play' 
  ${message}`,
      'red'
    )
  );
  return 0;
}

//------------------------------------------------------------------------------------------------------------------

// This function takes in a string and removes any special charcaters from that string
// It then returns a corrected string that has had said characters removed.
function correctString(string) {
  let regex = /[^A-Za-z0-9-_£$&@%\s]/gi;
  let replacedString = string.replace(regex, '');
  return replacedString;
}

//------------------------------------------------------------------------------------------------------------------

//if there are books found it returns the data formatted into the {title:data,author:data,publishingCompany:data} format .
//each line uses a ternary statement to return the message 'No___found' instead of undefined.
function formatBookResult(data) {
  return data.items.map(
    (e) => `{
      title:${!e.volumeInfo.title ? 'No title found' : e.volumeInfo.title},
      author:${
        !e.volumeInfo.authors ? 'No Author found' : e.volumeInfo.authors
      },
      publishingCompany:${
        !e.volumeInfo.publisher ? 'Publisher not found' : e.volumeInfo.publisher
      },
 }`
  );
}
//------------------------------------------------------------------------------------------------------------------

function userOptions(option1, option2, option3) {
  console.log(
    colourText(
      `      ${option3 ? option3 : ''}

            --------------------------------------------------------

            ${option1} 

            ${colourText('ENTER 1', 'bgWhite')}
            --------------------------------------------------------
            ${option2} 

            ${colourText('ENTER 2', 'bgWhite')} 
            
            `,
      'magenta'
    )
  );
}

//------------------------------------------------------------------------------------------------------------------

function handleUserRequest(data, response, username) {
  //recieves data from fetch request.
  //if the book is not found it returns an error message instead of returning undefined.
  //it checks the amount of totalItems found in the response if zero it returns the message below.
  if (data.totalItems === 0) {
    console.log(
      colourText('Sorry no books match your query. Please try again :D', 'red')
    );
  } else {
    /*if the query returns a result then the resulting data is passed into the formatBookResult() 
     function that returns said data in a {title:data,author:data,company:data} format*/
    response = formatBookResult(data);
    //this outputs the returned formatted data to the console with a Book ID attached to that users can choose book.
    console.log(
      response.map((e) => `Book ID :${response.indexOf(e) + 1} ${e}`)
    );
    userOptions('To save your book to your shelf  :', 'To Exit : ');

    let save = prompt(colourText('Enter Here :', 'cyan'));
    //it then passes this response data and users username to the returnBookSelection() function.
    //this function calls on the returnReadingList(username) function after checking if their username exists.
    updateBookshelf(username, response, save);
  }
}
//------------------------------------------------------------------------------------------------------------------

function goodbyeMsg() {
  console.log(
    `${colourText('Bye,', 'blue')} ${colourText(
      'Thank you',
      'yellow'
    )} ${colourText('for visiting', 'red')} ${colourText(
      '8th Shelf :D',
      'green'
    )}`
  );
}

export {
  findUsername,
  colourText,
  writeIntoDatabase,
  updateDatabase,
  errorMessage,
  correctString,
  formatBookResult,
  userOptions,
  handleUserRequest,
  goodbyeMsg,
};
