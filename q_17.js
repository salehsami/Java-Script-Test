// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
// of your program.

var guests = ['Umar', 'Sharjeel', 'Aliyan', 'Tayyab', 'Uzair', 'Wajahat', 'Hamid'];

guests.splice(7, 0, 'Akram')
guests.splice(0, 0, 'Ukahano')
guests.splice(4, 0, 'Muneeb')

// for (let i = 0; i < guests.length; i++) {
//     console.log("Mr", guests[i], "You are invited so come to dinner at our house tommorow");
// }
// console.log(guests[i])
for (let i = guests.length - 1; i != 1; i--) {
    console.log("We are sorry we can't invite you to dinner", guests[i]);
    guests.pop();
}

// guests.map((data) => {
//     console.log(data)
// })

// console.log(guests)
for (let i = 0; i < guests.length; i++) {
    // let v = guests.length + 1
    console.log(guests[i], "you are still invited")
}
for (let i = 0; i < guests.length + 1; i++) {
    guests.pop()
}
console.log(guests)