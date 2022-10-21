// 30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user
//     after they log in to a website. Loop through the array, and print a greeting to each user:

// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

var users = ['Salman', 'Yusuf', 'Uzair', 'Yasir', 'Admin', 'Hassan', 'Kaiser']

for (let index = 0; index <= users.length - 1; index++) {
    if (users[index] == 'Admin') {
        console.log("Hello Admin, would you like to see a status report?");
    } else {
        console.log("Hello ", users[index], ", thank you for logging in again.")
    }
}
// console.log("user includes admin or not lets check", users.includes("Admin"))