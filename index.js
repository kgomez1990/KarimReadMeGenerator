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
      name: 'Description',
      message: 'Please enter a description of your project.',
    },
    {
      type: 'input',
      name: 'Installation',
      message: 'Please enter description of installation instructions.',
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'Please enter a description of the usage Information.',
    },
    {
      type: 'input',
      name: 'Test',
      message: 'Please enter a description of Test Instructions.',
    },
    {
      type: 'checkbox',
      name: 'License',
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
      name: 'GitHub',
      message: 'Please enter your GitHub Username.',
    },
    {
      type: 'input',
      name: 'Email',
      message: 'Please enter your Email Address.',
    },
  ]);
};

let generateResponse = (response) => {
  return `${response.title}

  # Table of Contents

  - Description (#description)
  - Installation (#installation)
  - Usage (#usage)
  - Test (#test)
  - License (#license)
  - GitHub (#github)
  - Email (#email)

  # Description :
  [License] (![GitHub all releases](https://img.shields.io/github/downloads/kgomez1990/KarimReadMeGenerator/total?logo=Github&style=flat-square))


  ${response.description}

  #Installation:
  ${response.installation}

  #Usage:
  ${response.usage}

  #Test:
  ${response.test}

  #GitHub:
  ${response.github}

  #email:
  ${response.email} 
`};

const init = () => {
  promptUser()
    .then((answers) => writeFileAsync('Readme.md', readMe))
    .then(() => console.log('Successfully wrote to ReadMe.md'))
    .catch((err) => console.error(err));
};

init();