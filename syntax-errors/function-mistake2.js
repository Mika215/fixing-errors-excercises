'use strict';

/*
  environment:Edge

  name:Uncaught SyntaxError
  message:Malformed arrow function parameter list

  callstack:at <anonymous>:2:6
    at HTMLIFrameElement.evaller.onload (study-with.js:56)
    at Object.debugger (study-with.js:58)
    at JavaScriptFE.studyWith (javascript-class.js:463)
    at HTMLButtonElement.<anonymous> (javascript-class.js:293)

  life cycle:creation 

  the mistake:opening and closing parenthesis missing

  the fix(es):adding un opening and closing parenthesis for the function 'add' at its declaration phase
*/
//the proper syntax to declare a function is let function=()=>{};
const add = x = 0, y = 0 => {//error, mistake 
  return x + y;
};

const seven = add(3, 4);
