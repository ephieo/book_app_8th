# BOOK_APP TECH TEST SUBMISSION - EPHRATHAH OYEDOH

# How to use this CLI application :

## To run the app :

- Clone repo locally using `git clone` followed by the repo link.
- ` git clone https://github.com/ephieo/book_app_8th.git`
- Make sure to cd to `/Downloads/book_app_8th/` or `cd book_app_8th/downloads/book_app_8th` depending on where you are.
- make sure you're in the `book_app_8th.git` folder.
- Make sure you have a version of node `v14.5.0` or higher (this project utilises ES modules).
- check your current node version enter : `node -v` into your terminal.
- The current npm version of this project is `7.17.0`.
- run `npm i` to install all required packages.
- run `npm run play` in the terminal
- follow app instructions.

## Testing :

- `run npm test`

<img width="1440" alt="Screen Shot 2021-06-16 at 22 37 27" src="https://user-images.githubusercontent.com/60614102/122297605-9e1ce280-cef3-11eb-95f8-eda63093a973.png">

### Additional information about how the app works :

- You're unable to create multiple reading lists with the same username.
- If you wish to add more books or view your reading list you enter `npm run play` to restart.
- If you search for a book that doesn't exist it will exit out and tell you no book was found.
- If you enter a username that already exists your book will be added to that reading list.
- If you run into issues with your version of node please upgrade your version of node. There have been [noted versions that have issues](https://github.com/manuelbieh/geolib/issues/208) with `type:module`.
- I've also left the `.env` file on GitHub so that it can be used by those reviewing it but it would ideally be kept local.

# AIMS :

### This application should allow you to:

- Type in a query and display a list of 5 books matching that query. :white_check_mark:

- Each item in the list should include the book's author, title, and publishing company. :white_check_mark:
- A user should be able to select a book from the five displayed to save to a “Reading List” :white_check_mark:
- View a “Reading List” with all the books the user has selected from their queries :white_check_mark:
- this is a local reading list and not tied to Google Books’s account features.:white_check_mark:

---

# FEEDBACK - 2ND SUBMISSION :

- My first step when receiving the feedback on my project was to break down the feedback into practical tasks/steps.
- I first needed to reproduce the errors stated in my feedback and figure out how to fix them.
- I broke down the feedback into sections and gave notes on how I solved or planned to solve each issue.

### FEEDBACK FIXES :

#### FEEDBACK :

###### 1. When following the instructions in the readme to start the app, I was unable to run it and the following error was displayed: ✅

`_throw new ERR_REQUIRE_ESM(filename, parentPath, packageJsonPath);_ _Error [ERR_REQUIRE_ESM]: Must use import to load ES Module_`

- I've fixed it on my end to be able to run your app. Please can you make changes to your README so other users can seamlessly run it?
  - #### Notes :
    - My first step was to reproduce the errors listed in the feedback returned to me.
    - I couldn't reproduce the steps for the first two errors but I assumed it was because I had not detailed that you need to run `npm i` after cloning the repo and navigating to the correct folder.
    - I also had not taken into account that other people viewing the project may not have the same node version or environment that I had to run my project.
    - So I listed the node version I built the project in while recommending those viewing the project are working in a suitable node environment.
    - I used imports/ES modules which are still fairly new to node so the version a user has is important to how they can run the project without errors.
    - I made changes and pushed them to my `second-sub` branch.

#### FEEDBACK :

###### 2. When entering an emoji as the book title, the following error was thrown: ✅

`_TypeError [ERR_UNESCAPED_CHARACTERS]: Request path contains unescaped characters_`

- What changes would you make to allow your app to handle emojis or unexpected characters?
  - #### Notes :
    - I would have liked to figure how to render unicode characters in the terminal but as a fix for now to ensure that the programme runs without errors I aimed to remove unescaped charcters before passing them into my `fetchFromApi()` function.
    - I did this by writing a function called `correctString()` that took in a string and then replaced all characters that were not alphanumeric or a dash or underscore with an empty string `""`.
    - I then moved this function into the utils file to abstract it from index.js.
    - If I had more time I would have liked to figure out a way to actually parse emoji's and unescaped charcaters to allow them to be searched instead of removing them.

#### FEEDBACK :

###### 3. I noticed the *`fetchFromApi()`* method appears to be doing multiple actions, such as retrieving the data, then displaying the results etc. How can we make this function more readable?. ✅

    - #### Notes :

      - I can make the function more readable but extracting some of the formatting code into the utils file making it it's own function.
      - This would help with readabilty because each function would have it's own independent role.
      - Write more understandable comments that makes the code easier to read through.
      - I created a function called `formatBookResult()` and extracted it to the utils file.
      - I also created the userOptions() function to extract repeated code from index.js and fetch.js into the utils file.

#### FEEDBACK :

###### 4. What were the main tradeoffs for the language choice you made? ✅

    - #### Notes :
    - I chose to work with Node.js because Javascript is my strongest language, although this came with it's own setbacks.
    - I'm glad I chose node.js because I didn't have to worry about learning syntax or the complexities of a new language. Using node.js allowed me to reallocate the time and energy I would have spent on learning a new language to figuring out how to build the cli programme.
    - However, choosing node.js meant that I had to deal with the shortfalls of using node.js.
    - An example of a problem I ran into was working with input/outputs in the terminal/console. There are other languages such as c++ that I've used that have this functionality built into their standard library's.
    - I had to depend on external dependency's to work with input/outputs which made it a little difficult to test because I was also new to testing external modules and mock testing.
    - In relation to the given project I think node.js was a suitable choice but if this project was to be scaled up or required more intensive tasks, then another language that handles intensive tasks more easily would be required.
    - Using node.js however allowed me to use npm packages to help make up for the setbacks.
    - Npm being one of the most popular package managers right now meant that I had a lot of resources when I ran into issues with node.js and it's libraries/packages.

# Extra things I worked on :

- I thought that users would be slightly confused by a zero-indexed based book ID system so I changed the range from [0-4] to [1-5].
- I tried to work on some tests to mock the fs module, I still have a lot more to learn about testing dependencies but I thought I would try and see how far I got with it.
- I also realised when testing my programme in powershell on a windows laptop that yellow and purple text didn't show.
- I fixed this by changing the text colour to blue.

# TIMELINE

### I wrote about struggles and how I approached them through the given time for the assessment.

## 9th-10th June 2021 :

- Started the project by researching and planning out my steps.
- I had only built a CLI game in C++ before which was slightly easier in terms of input and output methods.
- I'd never built a CLI in javascript so my plan was to focus on what I understood from the task first and then spent time on what I didn't understand.
- Managed to make the fetch request and create a database.json file to save user entries into but when i tried to loop through the objects when I parsed them from JSON back to JS I struggled with the order of steps.
- Decided to rethink my approach. I also hadn't made a repo to track my commits so I took it as an oppurtunity to restart and track my steps accordingly.
- Sucessfully recieved the query data from the API and was able to take user input from the API. However, I was storing the whole response with the username instead of just their choices that needed to be added to the reading list.
- Reordered my steps.

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

###### (2).

- I found it hard to write tests for the type of functions I used, I tried to get a bette runderstanding of what types of tests I needed to write but only managed to write a few.

###### (4).

- I console.logged the multi-line part and then created the prompt as a one line variable.

### what I completed (14th-16th June):

- I reorganised the index.js file so that it takes the users choice and chooses which process to take. This helped solve the render issue the `returnReadingList` (now called `fetchReadingList()`) function. The function was no longer calling to `database.json` before the text was writteen into the file because they were now independent processes.

- I designed the terminal to make it distinct from other terminal processes by using the kleur package.

- I continued refactoring functions to reduce repeated code and tried to make my tests pass.
- Refactored some code to removed and hard-coded values.

# What I learned ?

Throught this whole project I learnt a lot and struggled a lot but genuinely enjoyed the experience.
It was fun to figure out the bugs I encountered and learn a little more about things I may have just touched on.
I still have a lot to lesrn and will continue to build on my weak points.

###### Theres a lot more that I encountered through this short project but here's a short recap :

- I had used JSON but never as a form of local storage.
  - I encountered some issues with parsing JSON to JS and vice versa.
- I learned how to output to the terminal and recieve data from the terminal in Javascript, I'd only done that in C++.
- It was my first time building a CLI in JavaScript.
  -It was a good chance to experince a more backend approach to JS with node.js.
- I struggled with testing due to having little experience with it in the past. However I took it as a good oppurtunity to try and learn as much as I could.

###### What I struggled with at the end and what I'd fix with more time ?

- In the end I couldn't figure out how to write tests for the types of functions I wrote.
- It was hard to write units tests for functions that used dependencies or functions that didn't return anything.
- I researched about what I coud use and came across dependency injections and mock tests.
- I got a good understanding on why its useful but couldn't understand its application and didn't want to use code I didn't understand.
- If I had more time I would work more on getting the tests to work and solving the edge cases to do with existing usernames.
- although usernames don't duplicate anymore it would be nice to have figured out how to at least let the user know that that username exists.

# Dependencies :

- dotenv (used to access environmental variables such as the API key.)
- kleur (used to colour the output in the terminal)
- node-fetch (used to make the fetch request with node.js)
- prompt-sync (used for terminal output/input)

# Ephrathah Oyedoh - Developer
