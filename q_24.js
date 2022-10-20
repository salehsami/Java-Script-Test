// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10.
// If you want to try more comparisons, write more tests.
// Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings

let company = "BMW Coding Scotland"
console.log("Equality operator with String", company == "BMW Coding Scotland")
console.log("Inequality operator with String", company != "Audi Coding Scotland")

// • Tests using the lower case function

console.log("Lower case function with String", company.toLowerCase())

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let employees = 3;
console.log("Equality operator with Numericals", employees == 3)
console.log("Inequality operator with Numericals", employees == 3)
console.log("Greater than operator with Numericals", employees > 1)
console.log("Smaller than operator with Numericals", employees < 3)
console.log("Greater than or Equal to operator with Numericals", employees >= 1)
console.log("Smaller than or Equal to operator with Numericals", employees <= 3)

// • Tests using "and" and "or" operators
if (employees == 3 & company == "BMW Coding Scotland") {
    console.log("Usage of AND operator accomplished")
}
if (employees == 3 || company == "Audi Coding Scotland") {
    console.log("Usage of OR operator accomplished")
}

// • Test whether an item is in a array

var freinds = ['Zaryab', 'Gollu', 'Mollu']
console.log('Item is in an array', freinds.includes('Zaryab'))
// console.log('Gollu' in freinds)
// console.log('Zaryab', 'Gollu', 'Mollu' in freinds)

// • Test whether an item is not in a array

var freinds = ['Zaryab', 'Gollu', 'Mollu']
console.log('Item is in an array', freinds.includes('Moiz'))