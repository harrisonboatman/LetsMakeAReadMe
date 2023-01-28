// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const mitLic = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
const eclipseLic = '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
const gnuLic = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'

const READMEgenerater = ({ title, description, install, usage, contribution, test, license, username, email }) =>
    `# ${title}  ${mitLic}

## Description

${description} 

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${install}

## Usage

${usage}

## Credits

${contribution}

## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.


## Tests

${test}`

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
                {name:'MIT',
                value:'This project has been licensed under the MIT License'},
                {name: 'GNU',
                value:  'This project has been licensed under the GNU License'},
                {name: 'Eclipse',
                value:'This project has been licensed under the Eclipse License'},

            ]
        
            
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


// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
