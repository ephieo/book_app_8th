# BOOK_APP TECH TEST SUBMISSION - EPHRATHAH OYEDOH

# How to use this CLI application :

- Clone repo locally
- make sure you're in the `book_app_8th.git` folder.
- run `npm run dev` in the terminal
- follow app instructions.

# AIMS :

### This application should allow you to:

- Type in a query and display a list of 5 books matching that query. :white_check_mark:

- Each item in the list should include the book's author, title, and publishing company. :white_check_mark:
- A user should be able to select a book from the five displayed to save to a “Reading List” :white_check_mark:
- View a “Reading List” with all the books the user has selected from their queries :white_check_mark:
- this is a local reading list and not tied to Google Books’s account features.:white_check_mark:

---

# TIMELINE

### I wrote about struggles and how I approached them through the given time for the assessment.

## 9th-10th June 2021 :

- I started the project by researching and planning out my steps.
- I had only built a CLI game in C++ before which was slightly easier in terms of input and output methods.
- I had never built a CLI in javascript so my plan was to focus on what I understood from the task first and then spent time on what I didn't understand.
- I managed to make the fetch request and create a database.json file to save user entries into but when i tried to loop through the objects when I parsed them from JSON back to JS I struggled with the order of steps.
- I then decided to rethink my approach. I also hadn't made a repo to track my commits so I took it as an oppurtunity to restart and track my steps accordingly.
- I sucessfully recieved the query data from the API and was able to take user input from the API. However, I was storing the whole response with the username instead of just their choices that needed to be added to the reading list.
- I then reordered my steps.

###### proposed code steps :

- request input from user (book name, author, username)
- make fetch request
- parse response and format it to select the title, author, company name etc..
- console.log() the response books in a format that allows the user to select a Book ID.
- request input from user (Book ID)
- Book ID should match the array position for the returned data so that book will be selected.
- write the chosen book with the user's username into the database.json file

After getting the users to store their chosen books in a reading list it left me with the following task to solve:

- How will I loop through the users in the database.json file to elect a user and add to their reading list ?
- what if someone has the same username ?
- I still need to display the users reading list.

---

## 11th -13th June 2021 - TASKS :

- Figure out how to loop through the users and only add a new user if that user doesn't exist. :white_check_mark:
- write unit test and try and apply TDD for any functions written. :eyes:
- research library's to help show the text more distinctly in terminal. :white_check_mark:

### what I Struggled with (11th-13 June):

1. I struggled with my function that returns reading lists, because it was calling the function immediately as my other function was reading the file. This caused the function to retrurn undefined but then return the actually return the reading list if you were to ente rthe same results a second time.

<ins>Initially it shows nothing but the description of the console log : </ins>

<img width="617" alt="Screen Shot 2021-06-13 at 22 55 33" src="https://user-images.githubusercontent.com/60614102/121823054-a9290600-cc9a-11eb-92b9-f2ad08391a88.png">

<ins>However, if you enter the same values into the console again you receive the object displaying the users reading list :</ins>

<img width="589" alt="Screen Shot 2021-06-13 at 22 55 14" src="https://user-images.githubusercontent.com/60614102/121823079-cf4ea600-cc9a-11eb-8403-621ae1fbebd5.png">

2. I struggled with setting up Jest to work with ES6 modules.

### How I handled blockers (11th-13 June):

##### 1. Reading List render issue :

- The problem was that I was rendering the readingList before the returnBookSelection() function had a chance to write the new response into the database.
- I was stuck elsewhere so I left this to work on something else so that I could come back and work on it with fresh eyes.
- My idea was that I could possible extract the database update functionality into another function so that it calls the returnReadingList function when it's finished writing into the database.

##### 2. Jest ES6 module issue :

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

- I managed to write a function called findUsername() which would allow me to loop through the usernames to check if the username already exists.
- I also push up all my code and created a ReadMe.md to track my progress with the task.
- I also refactored some code and extracted some code into functions in a utility file.
- Started writing tests.

---

## 14th -16th June 2021 - TASKS :

- Figure out how to loop through the users and only add a new user if that user doesn't exist. :white_check_mark:
- Figure out how to give user the option to check their reading list or search for a book :white_check_mark:
- reorder the user journey :white_check_mark:
- research library's to help show the text more distinctly in terminal. :white_check_mark:

### what I Struggled with (14th-16th June):

1.  I struggled for a while on how to access the nested ReadingList in the makeshift database that I'd created. This meant I couldn't push additional books onto that users readinglist.

2.  I was still struggling the render the readinList in the right order (11th-13th June issue #1).

3.  I struggled to write tests for functions that don't actaully return anything. I also found it hard to mock the fs module functions.

4.  The dependency I used for console input/output (prompt) kept repeating the output when I used multiline outputs.

### How I handled blockers (14th-16th June):

###### (1).

I was stuck for a while but realised that it kept returning the reading list object as a string :

<pre><code>let dataRes = `ReadingList:[${response[selection]}}]`;</code></pre>

I fixed this by moving the `` to only surround the data being passed in as a the value of ReadingList.
I figured out that it was parsing as a string by using typeof in a console log of the data being manipulated.

The fix :

<pre><code> let dataRes = { readingList: [`${[response[selection]]}`] };</code></pre>

###### (2).

- Figured that the main issue was the order in which I was called things.
- I also noticed that I was doing too much in the returnBookSelection() function it should only display the bookSelection as it says.However it was also writing into the database.

- I tried to write tests for smaller functions to break down the long function and then proceeded to write the functions and try to pass the tests.

###### (4).

- I console.logged the multi-line part and then created the prompt as a one line variable.

### what I completed (14th-16th June):

- I reorganised the index.js file so that it takes the users choice and chooses which process to take. This helped solve the render issue the `returnReadingList` (now called `fetchReadingList()`) function. The function was no longer calling to `database.json` before the text was writteen into the file because they were now independent processes.

- I designed the terminal to make it distinct from other terminal processes by using the kleur package.

- I continued refactoring functions to reduce repeated code and tried to make my tests pass.

# What I learned ?
