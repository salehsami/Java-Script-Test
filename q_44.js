// 44. Sandwiches: Write a function that accepts a array of items a person wants
//     on a sandwich. The function should have one parameter that collects as many
//     items as the function call provides, and it should print a summary of the sandwich
//     that is being ordered. Call the function three times, using a different number
//     of arguments each time.

// var sandwich_flavours = ['Ham', 'Lettuce', 'Ham & Lettuce', 'Avocado', 'Lettuce', 'Ham & Avocado', 'Cheese', 'Cream', 'Ham & Cream Cheese', 'Sliced Pepperoni']

function order(...flavours) {
    for (index = 0; index <= flavours.length - 1; index++) {
        console.log("...adding " + flavours[index] + " to your sandwich.")

        // console.log(flavours[index])
    }
    console.log("Your sandwich is ready!")
}

// var first_flavour = ['roast beef', 'cheddar cheese', 'lettuce', 'honey dijon']
// var second_flavour = ['turkey', 'apple slices', 'honey mustard']
// var third_flavour = ['Ham & Cream Cheese', 'Sliced Pepperoni']

order('Ham', 'Lettuce', 'Ham & Lettuce', 'Avocado')
order('Ham & Cream Cheese', 'Sliced Pepperoni')
order('roast beef', 'cheddar cheese', 'lettuce', 'honey dijon')