const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateResponse = require('./generateResponse');

// create writeFile function using promises instead of a callback function

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please enter a description of your project.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please enter description of installation instructions.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please enter a description of the usage Information.',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Please enter a description of Test Instructions.',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your application.',
      choices: [
            'MIT',
            'ISC',
            'Apache',
            'Domain'
      ]
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please enter your GitHub Username.',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter your Email Address.',
    },
  ]);
};

function writeFileAsync(filename, response) {
  fs.writeFile(filename, generateResponse(response), (error) => {/*error*/});

} 

const init = () => {
  promptUser()
    .then((response) => writeFileAsync('Readme.md', response))
    .then(() => console.log('Successfully wrote to ReadMe.md'))
    .catch((err) => console.error(err));
};

init();