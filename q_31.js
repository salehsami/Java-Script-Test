// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

var users = ['Salman', 'Yusuf', 'Uzair', 'Yasir', 'Admin', 'Hassan', 'Kaiser']


for (let index = users.length; index != 0; index--) {
    // console.log('popper', users[index]);
    users.pop()
    // console.log('poppeed', users.length);
}
// console.log('new length', users.length);
console.log(users);
// console.log("We need to find some users!")

if (users.length == 0) {
    console.log("We need to find some users!")
}

// for (let index = 0; index <= users.length - 1; index++) {
//     if (users[index] == 'Admin') {
//         console.log("Hello Admin, would you like to see a status report?");
//     } else {
//         console.log("Hello ", users[index], ", thank you for logging in again.")
//     }
// }
// console.log("user includes admin or not lets check", users.includes("Admin"))