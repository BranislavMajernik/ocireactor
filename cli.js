const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const files = require('./lib/files');
const inquirer  = require('./lib/inquirer');
const boxen = require('boxen');
const os   = require('os');
const clui = require('clui');

clear();

console.log(
  chalk.yellow(
    figlet.textSync('OCIreactor', { horizontalLayout: 'full' })
  )
);

 
var Gauge = clui.Gauge;
 
var total = os.totalmem();
var free = os.freemem();
var used = total - free;
var human = Math.ceil(used / 1000000) + ' MB';
 
var cpu = os.cpus();
console.log(chalk.yellow(boxen('CPU', {padding: 1}))); 
console.log(cpu);
console.log(chalk.greenBright(boxen('Memory used:', {padding: 1}))); 
console.log(Gauge(used, total, 20, total * 0.8, human));
console.log(' ');


const run = async () => {
    const credentials = await inquirer.askGithubCredentials();
    console.log(credentials);
    const template = await inquirer.askTemplate();
    console.log(template);
  };
  
  run();






