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
        choices: ['MIT', 'BSD', 'GNU'],
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
const {title, description, installation, usage, contribution, test,license, username, email} = data
const content = `

# ${data.title} 

---
## Description:

${data.description}

---

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [Contribution](#Contribution)
* [Test](#Test)
* [Questions](#Questions)



---

##Installation

${data.intallation}

---
##Usage

${data.usage}

---

##contribution

${data.contribution}

---

##Test

${data.test}

---
##Questions
Feel free to reach out via Github or email with any questions. <br>
[Github](https://github.com/${data.username}) <br>
[email](mailto:${data.email}) 
---
`
fs.writeFile('README.md',content,(err)=>
err? console.log(err):console.log("Success"));
})
