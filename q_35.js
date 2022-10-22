// 35. Animals: Think of at least three different animals that have a common characteristic.
//     Store the names of these animals in a list, and then use a for loop to
//     print out the name of each animal.
//     • Modify your program to print a statement about each animal, such as
//     A dog would make a great pet.
//     • Add a line at the end of your program stating what these animals have in
//     common. You could print a sentence such as Any of these animals would
//     make a great pet!


// (animal.includes('Lion')) 

var animal = ['Lion', 'Tiger', 'Dog'];
for (let index = 0; index < animal.length - 1; index++) {
    if (animal[index] == 'Lion') {
        console.log(animal[index], ": It is very difficult to tame but so helpfull when tammed")
    } else if (animal[index] == 'Tiger') {
        console.log(animal[index], ": It is very scary to have it but it is a symbol of power if you have it")
    } else if (animal[index] == 'Dog') {
        console.log(animal[index], ": It is life saving animal and easy to tame")
    }
}
console.log("It is not very easy to tame all these animals but once they are tamed then are are really helping and powerfull")