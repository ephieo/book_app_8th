import promptSync from 'prompt-sync';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

let key = process.env.API_KEY;

const prompt = promptSync();

let response;

let title = prompt('What is the name of the book ? ');
//console.log(title);

let author = prompt("What is the author's name ? ");
//console.log(author);

let username = prompt('What is your username ? ');

fetch(
  `https://www.googleapis.com/books/v1/volumes?q=${title}+inauthor:${author}&${key}&maxResults=5`
)
  .then((response) => response.json())
  .then((data) => {
    response = data.items.map(
      (e) => `{
        title:${!e.volumeInfo.title ? 'No title found' : e.volumeInfo.title},
        author:${
          !e.volumeInfo.authors ? 'No Author found' : e.volumeInfo.authors
        },
        company:${
          !e.volumeInfo.publisher
            ? 'Publisher not found'
            : e.volumeInfo.publisher
        },
   }`
    );

    console.log(response.map((e) => `Book ID :${response.indexOf(e)} ${e}`));
    prompt(
      "enter the book id for the book you'd like to save to your reading list. (Click Enter)"
    );
    let selection = prompt('Enter Book ID here :');
    //console.log(response);

    let dataRes = `ReadingList:${response[selection]}}`;

    fs.readFile('database.json', 'utf8', function (err, data) {
      let obj = JSON.parse(data);
      obj.users[username] = dataRes;

      //let choice = prompt(``)
      //console.log(obj);

      fs.writeFileSync('database.json', JSON.stringify(obj));
      fs.readFile('database.json', 'utf8', function (err, data) {
        let shelf = JSON.parse(data);
        let name = Object.keys(shelf.users).filter((e) => e === `${username}`);
        console.log(shelf.users[name]);
        //let names = Object.values(shelf.users[username]);

        console.log(shelf, name);
      });
    });
  })
  .catch((err) => console.log(err));

//let selection = prompt("do you want to add a book to your collection ? enter the book id :  ");
