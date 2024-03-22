// PART 1
console.log("\n\n");
console.log("PART 1");

var str = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;
// console.log(str);
var cell = "";
var row = "";

for (i = 0; i < str.length; i++) {
  if (str[i] !== ",") {
    cell += str[i];
    console.log();
  }
  if (str[i] === ",") {
    row += cell;
    // console.log(row)
    cell = " ";
  }
  if (str[i] === "\n") {
    row += cell;
    console.log(row);
    cell = " ";
    row = " ";
  }
}

// for (const x in str){
//     if(str[x] == "\n"){
//         continue;
//     }
// }
// console.log(str);

// PART 2
// Store your results in a two-dimensional array .
// Each row should be its own array, with individual entries for each column.
// Cache this two-dimensional array in a variable for later use.
console.log("\n\n");
console.log("PART 2");
var arrays = str.split("\n");
console.log(arrays);
var finalArr = [];
for (let array of arrays) {
  var singleArr = array.split(",");
  // console.log(singleArr);
  finalArr.push(singleArr);
}
console.log(finalArr);

// PART 3
console.log("\n\n");
console.log("PART 3");
var arrayOfObjects = [];

for (let i = 1; i < finalArr.length; i++) {
  var object = {};
  for (let j = 0; j < finalArr[0].length; j++) {
    // object.id = finalArr[i][j]
    object[finalArr[0][j]] = finalArr[i][j];
    // console.log("hello",finalArr[0][j]);
  }
  arrayOfObjects.push(object);
}
// console.log(arrayOfObjects);
// arrayOfObjects.concat(object[0],object[1],object[2],object[3],object[4])
console.log(arrayOfObjects);
console.log(arrayOfObjects.length);

// PART 4
//     1. Remove the last element from the sorted array .
// 2. Insert the following object at index 1:
// { id: "48", name: "Barry", occupation: "Runner", age: "25" }
// 3. Add the following object to the end of the array:
// { id: "7", name: "Bilbo", occupation: "None", age: "111" }
console.log("\n\n");
console.log("PART 4");
var newArrayOfObject = arrayOfObjects.splice(0, 4);
newArrayOfObject[1] = {
  ID: "48",
  Name: "Barry",
  Occupation: "Runner",
  Age: "25",
};
newArrayOfObject.push({
  ID: "7",
  Name: "Bilbo",
  Occupation: "None",
  Age: "111",
});
console.log(newArrayOfObject);
// console.log('line 84')

//use the values of each object within the array and the array’s length property to calculate the
// average age of the group. This calculation should be accomplished using a loop.
console.log("average age of of the group");
// console.log(newArrayOfObject[i]);
let sum = 0;
for (let i = 0; i < newArrayOfObject.length; i++) {
  // console.log(newArrayOfObject[i].Age);
  sum += Number(newArrayOfObject[i].Age);
  // console.log(sum);
}
// console.log(sum);
let average = sum / newArrayOfObject.length;
console.log(average);

//PART 5
// As a final task, transform the final set of data back into CSV format.
console.log("\n\n");
console.log("PART 5");

// console.log(newArrayOfObject);
let csv = "";
for (let i = 0; i < newArrayOfObject.length; i++) {
  csv +=
    newArrayOfObject[i].ID +
    ", " +
    newArrayOfObject[i].Name +
    ", " +
    newArrayOfObject[i].Occupation +
    ", " +
    newArrayOfObject[i].Age +
    ", ";
}
console.log(csv);
