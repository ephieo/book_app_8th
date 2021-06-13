# BOOK_APP TECH TEST SUBMISSION - EPHRATHAH OYEDOH

# TIMELINE

## 9th-10th June 2021

- I started the project by researching and planning out my steps.
- I had only built a CLI game in C++ before which was slightly easier in terms of input and output methods.
- I had never built a CLI in javascript so my plan was to focus on what I understood from the task first and then spent timeon what I didn't understand.
- I managed to make the fetch request and create a database.json file to save user entries into but when i tried to loop through the objects when I parsed them from JSON back to JS i struggled with the order of steps.
- I then decided to rethink my approach. I also hadn't made a repo to track my commits so I took it as an oppurtunity to restart and track my steps accordingly.
- I sucessfully recieved the query data from the API and was able to take user input from the API. However, I was storing the whole response with the username instead of just their choices that needed to be added to the reading list.
- I then reordered my steps.

#### code steps :

- request input from user (book name, author, username)
- make fetch request
- parse response and format it to select the title, author, company name etc..
- console.log() the response books in a format that allows the user to select a Book ID.
- request input from user (Book ID)
- Book ID should match the array position for the returned data so that book will be selected.
- write the chosen book with the user's username into the database.json file

After getting the users to store their chosen books in a reading list it left me with the following task to solve.

- How will I loop through the users in the database.json file to elect a user and add to their reading list ?
- what if someone has the same username ?
- I still need to display the users reading list.

## 11th -13th June 2021

- My first task was to figure out how to loop through the users and only add a new user if that user doesn't exist.

### what I completed (11th-13 June):

- I managed to write a function called findUdername() which would allow me to loop through the usernames to check if the username already exists.
- I also push up all my code and created a ReadMe.md to track my progress with the task.
- I also refactored some code and extracted some code into functions in a utility file.
