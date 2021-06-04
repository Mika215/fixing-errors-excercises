'use strict';

/*
  environment:Chrome

  name:Uncaught ReferenceError: 
    
  message:Cannot access 'isValidUserName' before initialization

  callstack:at eval (eval at <anonymous> (declaration-mistake-3.js:2), <anonymous>:27:19)
    at <anonymous>:2:1
    at HTMLIFrameElement.evaller.onload (study-with.js:56)
    at Object.debugger (study-with.js:58)
    at JavaScriptFE.studyWith (javascript-class.js:463)
    at HTMLButtonElement.<anonymous> (javascript-class.js:293)

  life cycle:execution

  the mistake:trying to access a variable before it is officially declared 

  the fix(es):declare variable 'inValidUserName' on the top before we actually try to access it later on
*/

const userName = 'chiobin';
console.log('userName:', typeof userName, userName);

//isValidUserName should be declared here(move the one which is declared next to the first scope)
if (userName.length > 3) {
  isValidUserName = true;//error
}

let isValidUserName;//mistake this should be moved to the top
if (userName.length <= 3) {
  isValidUserName = false;
}

console.log('isValidUserName:', typeof isValidUserName, isValidUserName);
