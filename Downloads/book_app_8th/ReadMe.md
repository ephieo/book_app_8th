# BOOK_APP TECH TEST SUBMISSION - EPHRATHAH OYEDOH

# AIMS :

### This application should allow you to:

- Type in a query and display a list of 5 books matching that query.

- Each item in the list should include the book's author, title, and publishing company. [x]
- A user should be able to select a book from the five displayed to save to a “Reading List” [x]
- View a “Reading List” with all the books the user has selected from their queries [x]
- this is a local reading list and not tied to Google Books’s account features.[ ]

# How to use this CLI application :

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

- Figure out how to loop through the users and only add a new user if that user doesn't exist.
- write unit test and try and apply TDD for any functions written.
- research library's to help show the text more distinctly in terminal.

### what I Struggled with (11th-13 June):

- I struggled with my function that returns reading lists, because it was calling the function immediately as my other function was reading the file. This caused the function to retrurn undefined but then return the actually return the reading list if you were to ente rthe same results a second time.

Initially it shows nothing but the description of the console log :

<img width="617" alt="Screen Shot 2021-06-13 at 22 55 33" src="https://user-images.githubusercontent.com/60614102/121823054-a9290600-cc9a-11eb-92b9-f2ad08391a88.png">

However, if you enter the same values into the console again you receive the object displaying the users reading list :

<img width="589" alt="Screen Shot 2021-06-13 at 22 55 14" src="https://user-images.githubusercontent.com/60614102/121823079-cf4ea600-cc9a-11eb-8403-621ae1fbebd5.png">

- I struggled with setting up Jest to work with ES6 modules.

### How I handled blockers (11th-13 June):

##### Jest ES6 module issue :

- I tried many different solutions to handle the jest issue, until I reached a solution.

###### the given error :

 <pre><code>`SyntaxError: Cannot use import statement outside a module`</code></pre>

###### The solution :

  <pre><code>
//package.json
    "scripts": {
        "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js",
        "dev": "node index.js"
                }
  </code></pre>

   <pre><code>
//jest.config.js
    const jestConfig = {
            verbose: true,
            //letting jest know what environment you're working in, in this case node,js.
            testEnvironment: 'jest-environment-node',
            //prevents jest from converting modules. 
            transform: {},
};

export default jestConfig;
  </code></pre>

### what I completed (11th-13 June):

- I managed to write a function called findUdername() which would allow me to loop through the usernames to check if the username already exists.
- I also push up all my code and created a ReadMe.md to track my progress with the task.
- I also refactored some code and extracted some code into functions in a utility file.
- Started writing tests.
