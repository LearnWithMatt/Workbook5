let kids = [
    { first : "Natalie", last : "Plyers" },
     { first: "Brittany", last: "Ray" },
     { first: "Zachary", last: "Westly" }
    ];

// let length = kids.length;
// for( let i = 0 ; i < length ; i++){
//     console.log("the name of the child is " + kids[i].first + " " + kids[i].last)
// }


/////////////////////////////

// for( let kid of kids){
//     console.log("teh name of the child is " + kid.first + " " + kid.last)
// }



///////////////


kids.forEach(displayChild);

function displayChild(child){
    console.log( `The name of the child is ${child.first} ${child.last}`);
}


