import fs from 'fs';
import promptSync from 'prompt-sync';

const prompt = promptSync();

function returnBookSelection(username, response) {
  prompt(
    "enter the book id for the book you'd like to save to your reading list. (Click Enter)"
  );
  let selection = prompt('Enter Book ID here :');

  let dataRes = `ReadingList:${response[selection]}}`;

  fs.readFile('database.json', 'utf8', function (err, data) {
    let obj = JSON.parse(data);
    obj.users[username] = dataRes;

    fs.writeFileSync('database.json', JSON.stringify(obj));
    returnReadingList(username);
  });
}
function returnReadingList(username) {
  fs.readFile('database.json', 'utf8', function (err, data) {
    let shelf = JSON.parse(data);
    let name = Object.keys(shelf.users).filter((e) => e === `${username}`);
    console.log(shelf.users[name]);

    //console.log(shelf, name);
  });
}

export { returnBookSelection, returnReadingList };
