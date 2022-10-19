// 15. Changing Guest List: You just heard that one of your guests can’t make the dinner,
// so you need to send out a new set of invitations.
// You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still
// in your list.




// let not_comming = [2, 4, 5]

// function invitation(guests) {
//     for (let i = 0; i < 3; not_comming++)
//         console.log(guests(not_comming[i]));
// };
// invitation(guests);

// console.log(guests);

let guests = ['Umar', 'Sharjeel', 'Aliyan', 'Tayyab', 'Uzair', 'Wajahat', 'Hamid'];
// let new_guest = ['ali', 'khan']
console.log(guests[1], ',', guests[2], ',', guests[6], " are not comming to the dinner")
guests.splice(6, 1, 'Akram')
guests.splice(1, 1, 'Ukahano')
guests.splice(2, 1, 'Muneeb')
// console.log(guests)
// guests.splice()
// let final_guests = guests.concat(new_guest)
// console.log(guests)
// console.log(new_guest)
// console.log(final_guests)
for (let i = 0; i < guests.length; i++) {
    console.log("Mr ", guests[i], " You are invited so come to dinner at our house tommorow");
}