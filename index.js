const blank = `# Let's Make A README!

## Description

This application will allow the user to answer a multitude of questions with their responses generating a README file similar to this one. 

## Table of Contents 



- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

Must have node installed, and run 'NPM I' in the console.

## Usage



## Credits

Utilized Node, FS, and Inquirer during this program.

## License

This program was made under the MIT License


## Questions

Feel free to contact me at hrry.boatman2@gmail.com
`
const inquirer = require('inquirer');
const fs = require('fs');
// Array of license badges for use after inquirer
const licenses = ['[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
    '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
]
// Initializes README to be blank upon launch
fs.writeFile('README.md', blank, (err) => err ? console.log(err) : console.log())



const READMEgenerater = ({ title, description, install, usage, contribution, test, license, username, email }, licChoice) =>
    `# ${title}  ${licChoice}

## Description

${description} 

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${install}

## Usage

${usage}

## Credits

${contribution}

## License

${license}
---


## Tests

${test}

## Questions

My Github username is: ${username}
My email is: ${email}
`

inquirer.prompt([

    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your soon to be amazing project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project. Press enter when finished.',
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. Press enter when finished.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples for use if applicable, then hit enter.'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please enter any contributors to your project, whether that be users or other programs or third party assets, then hit enter.'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please enter any test specifications that you would like to include in your README, then hit enter. '
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select which license you will use for your application',
        choices:
            [
                {
                    name: 'MIT',
                    value: 'This project has been licensed under the MIT License'
                },
                {
                    name: 'GNU',
                    value: 'This project has been licensed under the GNU License'
                },
                {
                    name: 'Eclipse',
                    value: 'This project has been licensed under the Eclipse License'
                },

            ],





    },
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your Github Username'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address, so this may be attached at the bottom of the README.'
    }







])
    .then((data) => {
        console.log(data)
        var licChoice
        if (data.license.includes('MIT')) {
            licChoice = licenses[0];
        } else if (data.license.includes('GNU')) {
            licChoice = licenses[2]
        } else {
            licChoice = licenses[1];
        };
        console.log(licChoice)
        fs.writeFile('README.md', READMEgenerater(data, licChoice), (err) =>
            err ? console.log(err) : console.log('SUCCESS WOOOOOOOOOOOOO'))
    }
    );

