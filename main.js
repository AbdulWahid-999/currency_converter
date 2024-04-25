import inquirer from "inquirer";
const Currency = {
    USD: 1,
    EUR: 0.93,
    PKR: 278,
    INR: 83,
    GBP: 0.79,
};
let answer = await inquirer.prompt([
    {
        name: 'from',
        message: ' Enter From Currency',
        type: 'list',
        choices: ['USD', 'PKR', 'EUR', 'INR', 'GBP']
    },
    {
        name: 'to',
        message: 'Enter To Currency',
        type: 'list',
        choices: ['USD', 'PKR', 'EUR', 'INR', 'GBP']
    },
    {
        name: 'ammount',
        message: 'Enter Your Ammount',
        type: 'number'
    }
]);
let fromAmmount = Currency[answer.from];
let toAmmount = Currency[answer.to];
let ammount = answer.ammount;
let baseAmmount = ammount / fromAmmount;
let convertedAmmount = baseAmmount * toAmmount;
console.log(convertedAmmount);
