//PART 1
console.log('PART 1');

const numArr = [1, 2, 3, 4, 5, 6, 7];

// Take an array of numbers and return the sum.
function numSum(param) {
    let sum = 0;
    for (let i = 0; i < param.length; i++) {
        sum += param[i];
    }
    return sum;
}
console.log(numSum(numArr));


// Take an array of numbers and return the average.
function average(nums) {
    // sum = numSum;
    // console.log(sum)
    let average = numSum(nums) / nums.length;
    return console.log(average);
}
average(numArr);


// Take an array of strings and return the longest string.
var strArr = ["Hello", "I", "sea", "orange", "colorado"];

function longestString(stringsArray) {
    // let result=[];
    let longestWord = "";
    // let longessstWord;
    for (let i = 0; i < stringsArray.length; i++) {
        let currentWord = stringsArray[i];
        if (currentWord.length > longestWord.length) {
            longestWord = currentWord.length;
            longestWord = currentWord
        }
    }
    return longestWord;
}
console.log(longestString(strArr));


// Take an array of strings, and a number and return an array of the strings that are longer than the
// given number.
// For example, stringsLongerThan(['say','hello','in','the','morning'], 3); would return ["hello","morning"].
function stringsLongerThan(arr, num) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > num) {
            result.push(arr[i])
        }
    }
    return result;
}
console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3));


// Take a number, n, and print every number between 1 and n without using loops. Use recursion.
function printNumber(n) {
    if (n > 0) {
        console.log(n);
        --n;
        // return;
    } else if (1 > n) {
        return;
    }
    printNumber(n)
}
printNumber(6);

//PART 2
console.log("\n\n");
console.log("PART 2");

let testingArr =
    [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }];



    // Sort the array by age.
    // Filter the array to remove entries with an age greater than 50.
function lessThan50(arr, age, sortArr){
    // sortArr(arr);
    let filtered= arr.filter( arr => arr.age < 50);
    return console.log(filtered)
    function sortArr(arr){
        let sortedArr = arr.sort((a , b)=> a.age - b.age);
        // return console.log(sortedArr);
        return;
    }
}

// Map the array to change the “occupation” key to “job” and increment every age by 1.
function changeProps(arr) {
    let mapArr = arr.map(({id,name,occupation, age}) => ({
        id, 
        name,
        job: occupation, 
        age: parseInt(age) + 1
    }));
    return mapArr;
}
// sortArr(testingArr);
lessThan50(testingArr);
console.log(changeProps(testingArr));

// Use the reduce method to calculate the sum of the ages.
// Then use the result to calculate the average age.
function averageAge(arr){
    const averageAgeResult = arr.reduce((acc, current)=>{
        let av = acc + parseInt(current.age) / arr.length;
        return av;
    }, 0)
    return console.log(averageAgeResult);
}
averageAge(testingArr);


//PART 3
console.log("\n\n");
console.log("PART 3");

let testingArr2 =
    [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }];

// Take an object and increment its age field.
// Take an object, make a copy, and increment the age field of the copy. Return the copy.
// function newList(data){
    
// }

function incrementAge(arr) {
    // let ageNumber=0;
    for (let i = 0; i < arr.length; i++) {
        let ageString = arr[i].age;
        // console.log(ageString)
        ageNumber = parseInt(ageString) + 1;
        console.log(ageNumber)
    }
    
    return arr;
}
incrementAge(testingArr)


