
var inputLow = 273025;
var inputHigh = 767253;

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
function isSorted(array){
   if(inputLow == array.sort().join("")){
     return true;
   }
}

function Adjacent(array){
     for (let i = 0; i <array.length ; i++) {
            if (array[i] === array[i +1] ) {
               return true
         }   
    }
}

console.log(findCombinations().length);