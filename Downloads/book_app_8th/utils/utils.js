import kleur from 'kleur';
import fs from 'fs';
/* This function takes in response takes formatted data from the so called "bookshelf" and the username of the user
to check if the users username exists  */

function findUsername(bookshelf, username) {
  let name = Object.keys(bookshelf.users).filter((e) => e === `${username}`);
  return name;
}
/*Function that colours text in the terminal*/
function colourText(text, colour) {
  let colouredText = kleur[colour](text);
  return colouredText;
}

//function writes data into the database.json file.
function writeIntoDatabase(obj) {
  return fs.writeFileSync('database.json', JSON.stringify(obj));
}

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

export { findUsername, colourText, writeIntoDatabase, updateDatabase };
