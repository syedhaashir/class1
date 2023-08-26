// let arr = ["12", 12];

// let newobject = JSON.parse(JSON.stringify(arr));
// newobject.push(13);
// console.log("new object: ", newobject)

// let i = 0;

// while (i < scores.length) {
//     console.log(scores[i]);
//     i++;
// }

// let check = "";

// check = () =>{ 
    // const input = prompt("Enter a number");
    // if (input % 3 == 0) {
    //     console.log("Fizz");
//     }
//     if (input % 5 == 0){
//         console.log("Buzz")
//     }
//     if (input % 5 == 0 && input % 3 == 0){
//         console.log("FizzBuzz")
//     }
// }

// check()
    
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// /////


// let findindex = "";

// findindex = (arr, target) => {
//     const pairs = [];
//     for (i = 0; i < arr.length; i++) {
//         for (j = i+1; j < arr.length; j++) {
//             if (arr[i]+ arr[j] == target){
//                 pairs.push([i,j]);
//             }
//         }

//     }
//     console.log(pairs);
// }

// let arr = [2, 6, 4, 8, 3, 7];
// let target = 10;

// findindex(arr, target)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// /////

// let fifo = "";
// let lifo = "";

// let arri = [2, 4, 6, 8, 10];
// let arry = [2, 4, 6, 8, 10];


// lifo = (arri) => {
//     let x = arri.length;
//     for (i=0 ; i < x ; i++) {
//         temp = arri.pop();
//         console.log("Lifo: ",temp)
//     }
// }

// fifo = (arry) => {
//     let x = arry.length;
//     for (i=0 ; i < x ; i++) {
//         temp = arry.shift();
//         console.log("Fifo: ",temp)
//     }
// }
// let main = "";

// main = () =>{
    // const input = prompt("Enter what do you want? LIFO or FIFO");
//     if (input == 'lifo') {
//         lifo(arri);
//     }
//     if (input == 'fifo') {
//         fifo(arry);
//     }
//     if (input == 'both') {
//         fifo(arry);
//         lifo(arri);
//     }

// }
// main();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// /////

// let length = "";

// length = (input) =>{
//     const input = prompt("Enter a string");
//     let output = input.length;
//     console.log("Length of your string: ",output);
// }
// length(input);

// program to reverse a string

function reverseString(str) {

    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

// take input from the user
const string = prompt('Enter a string: ');

const result = reverseString(string);
console.log(result);