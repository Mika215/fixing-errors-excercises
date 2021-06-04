'use strict';

/*
  environment:Chrome

  name:Uncaught ReferenceError: 
  message:Cannot access 'tomatoes' before initialization
    
  callstack:at eval (eval at <anonymous> (reading-variable-mistake.js:2), <anonymous>:23:13)
    at <anonymous>:2:1
    at HTMLIFrameElement.evaller.onload (study-with.js:56)
    at Object.debugger (study-with.js:58)
    at JavaScriptFE.studyWith (javascript-class.js:463)
    at HTMLButtonElement.<anonymous> (javascript-class.js:293)

  life cycle:execution

  the mistake:trying to read a variable which is "not yet initialised" 

  the fix(es):reordering the code(initialising a variable comes on the top and reading the variable through console.log buttom)
*/

console.log(tomatoes);//error, mistake 

let tomatoes = 'fresh';
