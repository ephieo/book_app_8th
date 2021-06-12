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
    if (findUsername(obj, username)) {
      console.log(`This username is already taken please start again :D`);
      return 0;
    }
    obj.users[username] = dataRes;

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

// if (findUsername()) {
//     fs.writeFileSync('database.json', JSON.stringify(obj));
//     returnReadingList(username);
//   }else{
//       prompt("Try again this username already exists, sorry :D)")
//   }
