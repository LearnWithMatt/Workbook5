let numbers = [7, 9, 64, 60, 12, 13, 65, 62];
let firstValOver60 = numbers.find(function(arrayValue){
    //is over 60?
    if (arrayValue > 60) {
        return true;
    }
    else {
        return false;
    }  
}); // returns 64
if (firstValOver60 != undefined) {
    console.log(firstValOver60);
}
else {
    console.log("No values over 60");
}
