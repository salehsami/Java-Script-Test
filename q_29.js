// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
// such as You really like bananas!

var favorite_fruits = ['Strawberry', 'Cocunt', 'Mango']

// if ('Bananas' in favorite_fruits) {
//     console.log("You really like Bananas!");
// } else if ('Cocunt' in favorite_fruits) {
//     console.log("You really like Cocunt!");
// }
// 'Cocunt' in favorite_fruits
// console.log("You really like !");

for (let index = 0; index <= favorite_fruits.length - 1; index++) {
    // if ('Bananas' in favorite_fruits) {
    //     console.log("You really like Bananas!");
    // } else if ('Cocunt' in favorite_fruits) {
    //     console.log("You really like Cocunt!");
    if (favorite_fruits.includes("Bananas")) {
        console.log("You really like Bananas!");
    } else if (favorite_fruits.includes("Cocunt")) {
        console.log("You really like Cocunt!");
    } else if (favorite_fruits.includes("Mango")) {
        console.log("You really like Mango!");
    } else if (favorite_fruits.includes("Peach")) {
        console.log("You really like Peach!");
    } else if (favorite_fruits.includes("Strawberry")) {
        console.log("You really like Strawberry!");
    }
}