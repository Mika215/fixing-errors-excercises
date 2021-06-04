'use strict';

/*
  environment:chrome

  name:Uncaught TypeError: 
  message:addedTowNumbers is not a function

  callstack: at eval (eval at <anonymous> (function-call-mistake.js:2), <anonymous>:28:15)
    at <anonymous>:2:1
    at HTMLIFrameElement.evaller.onload (study-with.js:56)
    at Object.debugger (study-with.js:58)
    at JavaScriptFE.studyWith (javascript-class.js:463)
    at HTMLButtonElement.<anonymous> (javascript-class.js:293)

  life cycle:execution

  the mistake:calling a wrong function(addedTowNumbers)

  the fix(es):calling the right function i.e 'addTowNumbers'
*/

const addedTowNumbers = 3 + 4;

const addTowNumbers = (x = 0, y = 0) => {
  return x + y;
};

// calling a non function(addedTowNumbers);this is rather a variable name which has a similar orthography with the function "addTowNumbers"
const seven = addedTowNumbers(3, 4); //error,Mistake 

console.assert(seven === addedTowNumbers);
