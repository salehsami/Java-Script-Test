// 33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.

// • Store the numbers 1 through 9 in a array.

// • Loop through the array.

// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th
// 7th 8th 9th", and each result should be on a separate line.

// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const children = arr1[0].concat('th');
// console.log(children);

var ord_numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
for (let index = 0; index <= ord_numbers.length - 1; index++) {
    if (ord_numbers[index] == '1') {
        console.log(ord_numbers[index].concat('st'))
    } else if (ord_numbers[index] == '2') {
        console.log(ord_numbers[index].concat('nd'))
    } else if (ord_numbers[index] == '3') {
        console.log(ord_numbers[index].concat('rd'))
    } else {
        console.log(ord_numbers[index].concat('th'))
    }
}