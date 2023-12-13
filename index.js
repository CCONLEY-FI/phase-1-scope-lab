// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

var bestCustomer;

function setBestCustomer() {
    bestCustomer = 'not bob';
}

console.log(bestCustomer);

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
}

console.log(bestCustomer);

const leastFavoriteCustomer = 'bob';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'not bob';
}

