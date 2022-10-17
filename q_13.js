// 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list
// to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”


var my_list = ['I love riding motorbikes', 'I can drive cars in intensive mode', 'I like to have latest things but sometimes you have to understand thats not how life works', 'I think we all enjoy but couldn\'t tell', 'I try to enjoy my life cuz I need stories to tell in old age', 'That\'s it for today meet u some other time with heart'];
// console.log("working before loop")
// for (let i = 0; i < my_list.length - 1; i++) {
//     console.log(my_list.random())
//     console.log("working in loop")
// }
// console.log("working in end")
function get_random(list) {
    return list[(Math.floor(Math.random() * list.length))];
}

console.log(get_random(my_list))