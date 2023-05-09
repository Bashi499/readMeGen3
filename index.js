const inquirer = inquirer('inquirer');
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

function generateMarkdown(data){
    return `# ${data.title}
    ${badge}
    ${data.description}
    ## Table of contents:
    *[Installation](#installation)
    *[Usage](#usage)
    *[License](#license)
    *[Contributing](#contributing)
    *[Tests](#tests)
    *[Questions](#questions)
    ### Installation: To install, run:
    \`\`\`${data.installations}\`\`\`
    ### Usage: 
    ${data.usage}
    ### License:
    The licenses are under:
    ${data.license}
    ### Contributing:
    ${data.contributing}
    ### Tests:
    For testing, run the following in console:
    \`\`\`${data.tests}\`\`\`
    ### Questions:
    For any questions, reach out on {Github}{https://github.com/Bashi499}
    `
}








promptUser()
  .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
  .then(() => console.log('Successfully wrote to index.html'))
  .catch((err) => console.error(err));