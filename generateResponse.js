
function generateResponse (response) {
    return `
# ${response.title}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Test](#test)
- [License](#license)
- [GitHub](#github)
- [Email](#email)
- [Questions](#questions)

## Description :
[License](![GitHub all releases](https://img.shields.io/github/downloads/kgomez1990/KarimReadMeGenerator/total?logo=Github&style=flat-square))


${response.description}

## Installation:
${response.installation}

## Usage:
${response.usage}

## Test:
${response.test}

## GitHub:
[Link to GitHub Profile](https://www.github.com/${response.github})

## Email:
${response.email} 

## Questions:
For more info or any questions, please reach to me at ${response.email} or here is a link to my GitHub profile: https://github.com/kgomez1990/KarimReadMeGenerator
  `};

  module.exports = generateResponse;