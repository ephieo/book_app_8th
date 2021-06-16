import fs from 'fs';
import { findUsername, writeIntoDatabase, colourText } from './utils.js';
import promptSync from 'prompt-sync';

const prompt = promptSync({ sigint: true });

function updateBookshelf(username, response, save) {
  if (save === '2') {
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
  } else {
    console.log(colourText('Error try again and enter either 1 or 2 ', 'red'));
  }
}

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
