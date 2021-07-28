const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'Title',
      message: 'What is the name of your project?',
    },
    {
      type: 'input',
      name: 'Project Description',
      message: 'Please enter a description of your project',
    },
    {
      type: 'input',
      name: 'Installation Instructions',
      message: 'Please enter description of installation instructions',
    },
    {
      type: 'input',
      name: 'Usual Information',
      message: 'Please enter a description of the usage Information',
    },
    {
      type: 'input',
      name: 'Test Instructions',
      message: 'Please enter a description of Test Instructions',
    },
    {
      type: 'list',
      name: 'License',
      message: 'Choose a license for your application',
    },
    {
      type: 'input',
      name: 'GitHub',
      message: 'Please enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'Email Address',
      message: 'Please enter your Email Address',
    },
  ]);
};



const init = () => {
  promptUser()
    .then((answers) => writeFileAsync('Readme.md', generateHTML(answers)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

init();