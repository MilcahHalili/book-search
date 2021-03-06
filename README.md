# Book Search

![Book Search Screenshot](https://i.imgur.com/zR4VzZY.png "Book Search Screenshot")

## Description

Book Search is a web app that uses Google Books API to:

1. Type in a query.
    * Display a list of books matching the query.
2. Display the follow data from each item in the query list:
    1. The book's title.
    2. The book's author(s).
    3. The book's publisher.
    4. The book's front cover.
    5. A link to more information about the book.

## Technologies Used

* Google Books API
* HTML
* CSS
* JavaScript
* Surge
* Jasmine
* Jasmine-jQuery

## Getting Started

### The Deployed App

Go to [Book Search](http://defiant-shade.surge.sh/) to view the web app.

### Running the App Locally

The following instructions will provide you with a copy of Book Search so that you may run the web app on your local machine for testing and development purposes.

#### Prerequisites

Knowledge of:

* GitHub
* Terminal

#### Installing

1. Open Terminal.
2. Type `mkdir` followed by a space and your folder name to create a folder where your copy of Book Search will live. For example: `mkdir folder-name`
3. `cd` into the directory you created.
4. Clone a copy of this repo into your newly created folder. If you are unfamiliar with how to clone a repo on Github, then please refer to [this link(https://help.github.com/articles/cloning-a-repository/) for further instructions.
5. Download [Jasmine-jQuery](https://github.com/velesin/jasmine-jquery) and include it in your test runner file. For more instructions, click [here](https://github.com/velesin/jasmine-jquery).

## Next Steps

### Bugs

* The following error can be found in the console:
`main.js:7 Uncaught TypeError: Cannot read property 'addEventListener' of null`
`at main.js:7`
* Jasmine specs fail although the function work properly on the app. The specs must be rewritten to pass.

If you encounter any bugs or have suggestions for further development, then please submit your feedback to halilicenteno@gmail.com, or create a GitHub account to create pull requests and/or leave a code review. To learn more about GitHub's code review features, please refer to [this link](https://github.com/features/code-review/).

### Further Development

Should you decide to build extra features, please consider a test-driven approach! This is my first attempt at writing tests, so I did not use Test Driven Development, which I, and my code, could have benefitted from greatly.