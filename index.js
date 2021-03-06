const inquirer = require('inquirer');
const fs = require('fs');
//README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

inquirer
.prompt([
    {type:'input',
    name: 'title',
    message:'what is your Project title?'},

    {type:'input',
    name: 'description',
    message:'what is description'},
    {type:'input',
    name: 'installation',
    message:'what is installation instructions'},
    {type:'input',
    name: 'usage',
    message:'what is usage information'},
    {type:'input',
    name: 'contribution',
    message:'what is your contribution guidelines?'},
    {type:'input',
    name: 'test',
    message:'what is your test instruction?'},
    {
        type: 'list',
        message: 'What is your license?',
        name: 'license',
        choices: ['MIT', 'ISC', 'Unlicense'],
      },
    {type:'input',
      name: 'username',
      message:'what is your Github username?'},

    {type:'input',
    name: 'email',
    message:'what is your email?'},
])
.then((data)=>{
console.log(data);
const {title, description, installation, usage, contribution, test,license, username, email} = data;
let licenseC;
switch(license){
  case 'MIT':
    licenseC = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
        break;
  case 'ISC':
    licenseC = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
    break; 
    case 'Boost Software License 1.0':
    licenseC = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
    break; 
    default:
      licenseC = '' 
}

const content = `

# ${data.title} 

---

${licenseC}

---
## Description:

${data.description}

---

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Test](#test)
* [Questions](#questions)

---

## Installation

${data.installation}

---
## Usage

${data.usage}

---

## Contribution

${data.contribution}

---

## Test

${data.test}

---
## Questions
Feel free to reach out via Github or email with any questions. <br>
[Github](https://github.com/${data.username}) <br>
[email](mailto:${data.email}) 
---
`
fs.writeFile('READMEtest.md',content,(err)=>
err? console.log(err):console.log("Success"));
})
