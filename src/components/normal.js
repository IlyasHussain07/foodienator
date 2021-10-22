// let newArray = [1, 2, 3, 4, 5, 6];

// let myValue = 0;

// // for (var i = 0; i < newArray.length; i++) {
// //     myValue = myValue + newArray[i]
// // }
// // console.log(myValue);

// newArray.map((item) => {
//     return myValue += item
// })

// console.log(myValue);


// let names = ["ilyas", "akshay", "sowmya", "anjali"]

// ascending order sort()

// console.log(names.sort());

// decending order

// console.log(names.reverse());


let names = [
    {
        name: "Ilyas",
        price: 250
    },
    {
        name: "akshay",
        price: 750
    },
    {
        name: "anjali",
        price: 150
    }

]
let names2 = [
    {
        name: "Ilyas",
        price: 250
    },
    {
        name: "akshay",
        price: 750
    },
    {
        name: "anjali",
        price: 150
    }

]

// ascending order

let newArray = names.sort((a, b) => {
    if (a.price < b.price) return -1;
    if (a.price > b.price) return 1;
    return 0;
})

//  OR

// let newArray = names.sort((a, b) => {
//     return a.price - b.price
// })

// decending order

// let newArray2 = names2.sort((a, b) => {
//     if (a.price < b.price) return 1;
//     if (a.price > b.price) return -1;
//     return 0;
// })

// OR

let newArray2 = names2.sort((a, b) => {
    return b.price - a.price
})


console.log(newArray);
console.log(newArray2);

// if we are sorting by any string don't forget to use toLowerCase() method in if conditions