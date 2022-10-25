// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
//     function make_great() with a copy of the array of magicians’ names. Because the
//     original array will be unchanged, return the new array and store it in a separate array.
//     Call show_magicians() with each array to show that you have one array of the original
//     names and one array with the Great added to each magician’s name.
var new_arr = []

function make_great(params) {
    for (let index = 0; index < mags_name.length; index++) {
        let dummy = 'Great '.concat(params[index])
        new_arr.push(dummy)
    }
    // console.log(new_arr)
}

function show_magicians(arr) {
    for (let index = 0; index < arr.length; index++) {
        // console.log(arr[index])
    }
    // console.log(arr)
}

var mags_name = ['David Copperfield', 'Doug Henning', 'Penn & Teller']
make_great(mags_name)
show_magicians(new_arr)

console.log("Orignal array is:", mags_name)
console.log("Modified array is:", new_arr)