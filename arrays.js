
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
var mystring = "foo"

function addElementToBeginningOfArray(chocolateBars, mystring)   {
  return [mystring,...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, mystring) {
chocolateBars.unshift(mystring);
return chocolateBars
}

function addElementToEndOfArray(chocolateBars, mystring) {
  return [...chocolateBars,mystring]
}

function destructivelyAddElementToEndOfArray(chocolateBars, mystring) {
  chocolateBars.push(mystring);
  return chocolateBars
}

function accessElementInArray(array,index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift();
  return chocolateBars
}
function 


   
