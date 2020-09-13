const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter a project name!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project (Required)',
        validate: descripInput => {
          if (descripInput) {
            return true;
          } else {
            console.log('Please enter a description!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide some information about yourself:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('Please enter instructions!');
            return false;
          }
        }
    },
    {
        type: 'checkbox',
        name: 'licenses',
        message: 'What license do you have for your project?',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'None']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide guidelines for how other developers to contribute.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide examples on how to run the tests.',
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your github username?',
        validate: userInput => {
            if (userInput) {
              return true;
            } else {
              console.log('Please enter your username!');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log('Please enter your email!');
              return false;
            }
        }
    } 
    // 
];



// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', data, function(err) {
        if(err)
        {
            return console.log(err);
        }
        console.log("Done!");
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then (data => {
        writeToFile("README.md", generateMarkdown({...data}));  
    })
}

// function call to initialize program
init();
