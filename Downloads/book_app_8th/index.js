import promptSync from 'prompt-sync';
import dotenv from 'dotenv';
import fetchFromApi from './utils/fetch.js';

dotenv.config();

let key = process.env.API_KEY;

const prompt = promptSync();

let title = prompt('What is the name of the book ? ');

let author = prompt("What is the author's name ? ");

let username = prompt('What is your username ? ');

fetchFromApi(title, author, username, key);
