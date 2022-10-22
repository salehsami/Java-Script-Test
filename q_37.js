// 37. Large Shirts: Modify the make_shirt() function so that shirts are large
//     by default with a message that reads I love JavaScript. Make a large shirt and a
//     medium shirt with the default message, and a shirt of any size with a different
//     message.

// function make_shirt(size = "extra small", text = "I love JavaScript.") {
//     // console.log("The size of the shirt is:", size || "large")
//     // console.log("The message printed on the shirt is:", text || "  fuck off");
//     console.log("The size of the shirt is:", size)
//     console.log("The message printed on the shirt is:", text);
// }
// make_shirt()
// make_shirt("Small", "I am Cool even in Summers.")
// make_shirt("Medium", "Getting cool Everyday")


function make_shirt(size = "large", text = "I love JavaScript.") {
    console.log("The size of the shirt is:", size)
    console.log("The message printed on the shirt is:", text);
}
make_shirt("Large")
make_shirt("Medium")
make_shirt("XX", "Size Matters.")