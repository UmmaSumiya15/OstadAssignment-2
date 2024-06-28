/*
1) Write a function named ‘calculateSum’ that takes two arguments and returns their sum.
*/


function calculateSum (a , b){

  let sum = a + b;
  return sum

}

// console.log(calculateSum( 3, 5));



/*
2) Write a function named ‘isEven’ that takes one argument and returns true if the number is even, and false otherwise.
*/


function isEven (number){

  if (number % 2 === 0) {
    return true
    
  } 
  else {

    return false
    
  }

}

// console.log(isEven( 44 ));


/*
3) Write a function named ‘findMax’ that takes an array of numbers and returns the largest number in the array.
*/



function findMax (arr){

  let largestNumber = 0;
  for (let i = 0; i < arr.length; i++) {

    let number = arr[i];
    if (number > largestNumber) {
      largestNumber = number
      
    }  
  }
  return largestNumber

}

// console.log(findMax( [ 22, 69, 48, 53, -263]));


/*
4) Write a function named ‘reverseString’ that takes a string and returns the string reversed.
*/


function reverseString (str){

  let reverseStr = '' ;

  for (let i = str.length -1; i >= 0; i--) {
    
    let letter = str[i];
    reverseStr += letter  
    
  }

  return reverseStr

}

// console.log(reverseString('anjali'));


/*
5) Write a function named ‘filterOddNumbers’ that takes an array of numbers and returns a new array containing only the odd numbers.
*/

function filterOddNumbers (arr){

  let OddNumbers = [];

  for (let i = 0; i < arr.length; i++) {

    let number = arr[i];
    
      if (number % 2 !== 0) {

        OddNumbers.push(number);
        
      } 
    
  }

  return OddNumbers

}

// console.log(filterOddNumbers( [43,65,46,22,876,567, 3]));



/*
6) Write a function named ‘sumArray’ that takes an array of numbers and returns the sum of all elements.
*/

function sumArray (arr){

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {

    let number = arr[i];
    
      sum += number
    
  }

  return sum

}

// console.log(sumArray( [2,4,5,7,2]));

/*
7) Write a function named ‘sortArray’ that takes an array of numbers and returns a new array sorted in ascending order.
*/

function sortArray (arr){

 
  let sortArr = arr.sort(function(a, b){return a - b});

  return sortArr  

}

// console.log(sortArray( [3, 6, 99, 34, 7 ]));

/*
8) Write a function named ‘capitalizeFirstLetter’ that takes a string and returns the same string with the first letter capitalized. Ex-  console.log(capitalizeFirstLetter("hello"));  // Output:  "Hello"

*/

function capitalizeFirstLetter (str){

  let capitalizeStr = str[0].toUpperCase();
  capitalizeStr += str.slice(1)

  return capitalizeStr

}

// console.log(capitalizeFirstLetter( 'banana'));