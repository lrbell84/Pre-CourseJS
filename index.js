//1. Write a function that takes a number and returns true if it is a positive number and false if it is a negative number.

function isNumberPositive(a, b) {
    let isNumberPositive = (-1 * 10);
    if(isNumberPositive > 0) {
        return false;
    } else {
        return true;
    }
}
       isNumberPositive(-1);  // returns false
       isNumberPositive(10);  // returns true


//2. Write a function that takes a number of days and converts it into an age.

function convertDaysToAge(totalNumberOfDays) {
    const age = `${totalNumberOfDays}` / 365;
    }
console.log(convertDaysToAge(3650)); 
//returns 10
console.log(convertDaysToAge(6570)); 
// returns 18


//3. Write a function that takes three numbers and returns the largest of the three numbers.

const getLargestNumber = [x, y, z]; 
 console.log(Math.max(...getLargestNumber));

getLargestNumber(2, 1, 4); // returns 4
getLargestNumber(6,2,3); // returns 6

//4. Write a function that takes an array of names and returns the last name from the array of names.


let getLastName = ["Charlie", "Rob", "Andy"];
console.log(getLastName [2]);

getLastName = ["Ash", "Stu"];
console.log(getLastName [1]);

getLastName(["Charlie", "Rob", "Andy"]); // returns “Andy”
getLastName(["Ash","Stu"]); // returns "Stu"

//5. Write a function that takes an array of numbers and returns true if all of the numbers are positive. It should return false if there are one or more negative numbers in the array.

function allNumbersPositive([x, y, z]) {
    if (allNumbersPositive [x, y, z]) {
        return true;
    } else {
        return false;
    }
}
allNumbersPositive([2,4,5]); // returns true
allNumbersPositive([-5,4,6]); // returns false
