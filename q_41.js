// 41. Magicians: Make a array of magician’s names. Pass the array to a function
//     called show_magicians(), which prints the name of each magician in the array.

function show_magicians(arr) {
    for (let index = 0; index < mags_name.length; index++) {
        console.log(arr[index])
    }
}
mags_name = ['David Copperfield', 'Doug Henning', 'Penn & Teller']
show_magicians(mags_name)