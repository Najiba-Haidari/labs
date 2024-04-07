// Declare a global counter variable.
// Create a simple function that increments the variable, and then calls itself recursively .
// Surround the initial function call in a try/catch block.
// Within the catch, log the error and the value of the counter variable.
// let counter = 1;

// try {
//     function counterFunction(num){
//         num++;
//         console.log("number", num)
//         counterFunction(num);
//         return num;
//     }
//     let theFunction = counterFunction(counter)
//     console.log("counter", counter);
//     console.log("we are expecting the function", theFunction)
    
// } catch (error) {
//     console.log("error: ", error)
// }
//the num result for stack overflow is 9075

//PART 2
// Write a recursive function that completely flattens an array of nested arrays, regardless of how
// deeply nested the arrays are.
// Once your recursive function is complete, trampoline it.
const trampoline = (f, ...args) => {
    let result = f(...args);
    while (typeof result === "function") {
      result = result();
    }
    return result;
  }


// let n= 50000;
function flattenArray(array){
    // let a = 1;
function flattenRepeat(array, result){
let result = [];
for (const item of array){
  if (Array.isArray(item)){
    flattenRepeat(item, result)
  }else{
    result.push(item)
  }
}
return result;
}
return trampoline(()=> flattenRepeat(arr))
}
// console.log("n", n)
const nestedArray = [1, [2, [3, 4], 5], [6, [7, 8]]];
console.log("flatten", flattenArray(nestedArray));

  /**
   * Now, we can call the factorial function with as high
   * a number as we would like (as long as we don't run into
   * other errors, like exceeding MAX_SAFE_INTEGER, or looping
   * too many times...).
   * 
   * Unfortunately, both of these are the case here, but
   * the principle of trampolining holds!
   */
  console.log(trampoline(facto(10000)))

//PART 3
// Deferred Execution
