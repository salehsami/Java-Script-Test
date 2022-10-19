// 16. More Guests: You just found a bigger dinner table, so now more space is
//     available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.


var guests = ['Umar', 'Sharjeel', 'Aliyan', 'Tayyab', 'Uzair', 'Wajahat', 'Hamid'];

guests.splice(7, 0, 'Akram')
guests.splice(0, 0, 'Ukahano')
guests.splice(4, 0, 'Muneeb')

console.log("We found a bigger table so everyone can come")
for (let i = 0; i < guests.length; i++) {
    console.log("Mr", guests[i], "You are invited so come to dinner at our house tommorow");
}
// console.log(guests)