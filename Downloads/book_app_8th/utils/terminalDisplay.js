import fs from 'fs';
import { findUsername, writeIntoDatabase, colourText } from './utils.js';

import promptSync from 'prompt-sync';

const prompt = promptSync();

function updateBookshelf(username, response) {
  prompt(
    colourText(
      "enter the book id for the book you'd like to save to your reading list. (Click Enter)",
      'magenta'
    )
  );
  let selection = prompt(colourText('Enter Book ID here :', 'magenta'));

  let dataRes = { readingList: [`${[response[selection]]}`] };

  fs.readFile('database.json', 'utf8', function (err, data) {
    let obj = JSON.parse(data);

    if (findUsername(obj, username).length == 0) {
      obj.users[username] = dataRes;
      writeIntoDatabase(obj);
    } else {
      obj.users[username].readingList.push(response[selection]);

      writeIntoDatabase(obj);
    }
  });

  //fetchReadingList(username);
}

function fetchReadingList(username) {
  fs.readFile('database.json', 'utf8', function (err, data) {
    let shelf = JSON.parse(data);
    //let name = findUsername(shelf, username);

    console.log(
      colourText(
        `\n ${colourText(`${username}`, 'cyan')} here's your Reading List : \n`,
        'magenta'
      ),
      shelf.users[username].readingList
    );
  });
}

export { updateBookshelf, fetchReadingList };
