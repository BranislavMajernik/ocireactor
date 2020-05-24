const inquirer = require('inquirer');

module.exports = {
  askGithubCredentials: () => {
    const questions = [
      {
        name: 'username',
        type: 'input',
        message: 'Enter your GitHub username or e-mail address:',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter your username or e-mail address.';
          }
        }
      },
      {
        name: 'password',
        type: 'password',
        message: 'Enter your password:',
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter your password.';
          }
        }
      }
    ];
    return inquirer.prompt(questions);
  },
  askTemplate: () => {
    const defaultTemplate = 'javascript';  
    const questions = [
      {
        type: 'list',
        name: 'template',
        message: 'Please choose which project template to use',
        choices: ['javascript', 'typescript'],
        default: defaultTemplate
      },
      {
        type: 'confirm',
        name: 'git',
        message: 'Should a git be initialized?',
        default: false
      }
    ];
    return inquirer.prompt(questions);
  },
};
