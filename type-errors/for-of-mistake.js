'use strict';

/*
  environment:chrome

  name:Uncaught TypeError: 
  message:maxNumber is not iterable

  callstack: at eval (eval at <anonymous> (for-of-mistake.js:2), <anonymous>:25:17)
    at <anonymous>:2:1
    at HTMLIFrameElement.evaller.onload (study-with.js:56)
    at Object.debugger (study-with.js:58)
    at JavaScriptFE.studyWith (javascript-class.js:463)
    at HTMLButtonElement.<anonymous> (javascript-class.js:293)

  life cycle:execution

  the mistake:trying to iteret a non iterable variable 

  the fix(es):assigning an iterable string value with 6 charachters  
*/
//numbers and all variables with single charachter are not iterable;therefore we have to assign a string value with 6 characters
const maxNumber = '012345'; //mistake

for (const i of maxNumber) { //error
  console.log(i); // 0, 1, 2, 3, 4, 5
}
