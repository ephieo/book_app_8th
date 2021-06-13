import fs from 'fs';
import { findUsername } from './utils.js';

import promptSync from 'prompt-sync';

const prompt = promptSync();

function returnBookSelection(username, response) {
  prompt(
    "enter the book id for the book you'd like to save to your reading list. (Click Enter)"
  );
  let selection = prompt('Enter Book ID here :');

  let dataRes = `ReadingList:[${response[selection]}}]`;

  fs.readFile('database.json', 'utf8', function (err, data) {
    let obj = JSON.parse(data);
    console.log(
      'checking is findUsername returns anything',
      findUsername(obj, username)
    );
    obj.users[username] = dataRes;

    fs.writeFileSync('database.json', JSON.stringify(obj));
  });

  returnReadingList(username);
}

function returnReadingList(username) {
  fs.readFile('database.json', 'utf8', function (err, data) {
    let shelf = JSON.parse(data);
    let name = findUsername(shelf, username);

    console.log('displaying users reading list', shelf.users[username]);

    //console.log(shelf, name);
  });
}

export { returnBookSelection, returnReadingList };
