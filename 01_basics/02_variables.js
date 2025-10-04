/*
const -> used to store constant values
var -> used to store variables value    // Scope { } problem & old method to declare variables
let -> used to store variable values // Scope { } problem resolved

Note : Prefer not to use var because of issue in block scope & functional scope
*/
const accountId = 144553;    // value can't be changed
let accountEmail = "aditya946@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";   // Not prefered to be use without any keyword(let,const,var) but it can also be done in js
let accountState;   // not initialized -> js will show it's value [ 'undefined' ]

// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);

// instead of using above 4 lines we can use a single line to print all values in table form
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

console.log("After updation");

// accountId =5356;     => not allowed

accountEmail = "adityasharma94610@gmail.com";
accountPassword = "Aditya@00";
accountCity = "New Delhi";
accountState = "freezed"
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])





