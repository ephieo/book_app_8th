import fs from 'fs';
import { exit } from 'process';
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
    console.log(findUsername(obj, username));
    obj.users[username] = dataRes;
    if (findUsername(obj, username)) {
      console.log(
        `This username is already exists. \nExit using CTRL + C to restart or your chosen book will be added to ${username}'s Reading List:D`
      );
    }

    fs.writeFileSync('database.json', JSON.stringify(obj));
  });
  returnReadingList(username);
}

function returnReadingList(username) {
  fs.readFile('database.json', 'utf8', function (err, data) {
    let shelf = JSON.parse(data);
    let name = findUsername(shelf, username);

    console.log(shelf.users[name]);

    //console.log(shelf, name);
  });
}

function findUsername(shelf, username) {
  let name = Object.keys(shelf.users).filter((e) => e === `${username}`);
  return name;
}
export { returnBookSelection, returnReadingList, findUsername };
