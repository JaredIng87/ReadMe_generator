//Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
const markdown = require('./utils/generateMarkdown.js');

//an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your app?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Describe your app.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation requirements?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How do you use the app?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose your license.',
      choices: ['MIT', 'GPL', 'Apache 2.0', 'MPL-2.0'],
      default: 'MIT',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'contributing?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'tests?',
    },
  ]);
};



//function to initialize app
const init = () => {
  questions()
    .then((answers) => writeFile('README.md', markdown(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
