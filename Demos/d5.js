let numbers = [7, 9, 64, 60, 12, 13, 65, 62];
let firstValOver60 = numbers.find( number => number > 60); // returns 64
if (firstValOver60 != undefined) {
    console.log(firstValOver60);
}
else {
    console.log("No values over 60");
}
