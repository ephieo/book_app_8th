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
  return kleur[colour](text);
}

function writeIntoDatabase(obj) {
  return fs.writeFileSync('database.json', JSON.stringify(obj));
}

export { findUsername, colourText, writeIntoDatabase };
