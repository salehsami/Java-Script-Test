// 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs
//     to produce an index error. Make sure you correct the error before closing the program.

var guests = ['Umar', 'Sharjeel', 'Aliyan', 'Tayyab', 'Uzair', 'Wajahat', 'Hamid'];


// for (let i = guests.length + 1; i != 1; i--) { 
//     console.log("We are sorry we can't invite you to dinner", guests[i]); // here is the error and it is corrected in next stage 
//     guests.pop();
// }

for (let i = guests.length - 1; i != 0; i--) {
    console.log("We are sorry we can invite you to dinner", guests[i]);
    guests.pop();
}