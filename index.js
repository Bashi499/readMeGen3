const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () =>
  inquirer.prompt([
    {
      type: 'input',
      name: 'author',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'username',
      message: 'What is your username on Github?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Could you please describe your project?',
    },
    {
      type: 'lsit',
      name: 'license',
      message: 'What license does the project use?',
    },
    {
      type: 'input',
      name: 'installations',
      message: 'How would you install dependencies?'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'what commands are used to run tests?'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Are there any notes for using the app?'
    },
    {
      type: 'input',
      name: 'contribute',
      message: 'Are there any user messages about contributing to the app?'
    },
]);



const generateHTML = (answers) =>
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${answers.name}</h1>
    <p class="lead">I am from ${answers.location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${answers.github}</li>
      <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

promptUser()
  .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
  .then(() => console.log('Successfully wrote to index.html'))
  .catch((err) => console.error(err));