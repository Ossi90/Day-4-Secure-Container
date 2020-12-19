
// Solution to the https://adventofcode.com/2019/day/4 challenge.

// input values given by Advent of Code
var inputLow = 273025;
var inputHigh = 767253;

// Main function responsible for returning an array of all possible combination that fit the description
const findCombinations = () =>{
var passwords = [];
for(inputLow; inputLow<=inputHigh; inputLow++){
    const passArr = [...inputLow.toString()];
    if(passArr.length == 6 && isSorted(passArr) && Adjacent(passArr)){
        passwords.push(inputLow);
    
         }
    }
    return passwords;
}

// checks if the digit increases left to right.
function isSorted(array){
   if(inputLow == array.sort().join("")){
     return true;
   }
}

// checks if there are two adjacent numbers
function Adjacent(array){
  let newArray = [];
     for (let i = 0; i <array.length ; i++) {
       let preDigit = array[i -1];
       let digit = array[i];
       let nextDigit = array[i+1];
       let afterNextDigit = array[i+2]

              if (preDigit !== digit && digit === nextDigit && nextDigit !== afterNextDigit ) {
              
                 return true;
                  
                 
              }
         }  
}


// prints the number of combination 
console.log(findCombinations().length);