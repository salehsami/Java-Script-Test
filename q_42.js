// 42. Great Magicians: Start with a copy of your program from Exercise 39.
//     Write a function called make_great() that modifies the array of magicians by adding
//     the phrase the Great to each magician’s name. Call show_magicians() to
//     see that the list has actually been modified.
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
    console.log(arr)
}

var mags_name = ['David Copperfield', 'Doug Henning', 'Penn & Teller']
make_great(mags_name)
show_magicians(new_arr)