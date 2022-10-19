// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
//     of people you are inviting to dinner.

let guests = ['Umar', 'Sharjeel', 'Aliyan', 'Tayyab', 'Uzair', 'Wajahat', 'Hamid'];
guests.splice(6, 1, 'Akram')
guests.splice(1, 1, 'Ukahano')
guests.splice(2, 1, 'Muneeb')
console.log("Number of people coming to dinner are: ", guests.length)