'use strict';

/*
  environment:Edge

  name:Uncaught ReferenceError 
    
  message:isValidUserName is not defined

  callstack:at eval (eval at <anonymous> (scope-mistake.js:2), <anonymous>:32:57)
    at <anonymous>:2:1
    at HTMLIFrameElement.evaller.onload (study-with.js:56)
    at Object.debugger (study-with.js:58)
    at JavaScriptFE.studyWith (javascript-class.js:463)
    at HTMLButtonElement.<anonymous> (javascript-class.js:293)

  life cycle:excution

  the mistake:reading an innervariable(inaccessible) from the outer scope

  the fix(es):moving the  console.log('isValidUserName:', typeof isValidUserName); inside the two scopes ,scope one(if)&Scope two(else)
*/

const userName = 'chiobin';
console.log('userName:', typeof userName, userName);

if (userName.length > 4) {
  const isValidUserName = true;
  //we need a console.log() to read the first argument from the inner scope
} else {
  const isValidUserName = false;
  //we need a console.log() to read the second argument from the inner scope
}
console.log('isValidUserName:', typeof isValidUserName, isValidUserName);//error, mistake


