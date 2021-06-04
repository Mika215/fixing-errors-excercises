'use strict';

/*
  environment:Edge

  name:Uncaught SyntaxError
  message:Unexpected token 'for'

  callstack: at <anonymous>:2:6
    at HTMLIFrameElement.evaller.onload (study-with.js:56)
    at Object.debugger (study-with.js:58)
    at JavaScriptFE.studyWith (javascript-class.js:463)
    at HTMLButtonElement.<anonymous> (javascript-class.js:293)

  life cycle:creation

  the mistake:using globaly resrved key words as a variable name

  the fix(es):replace the 'for' variable name with unreserved one
*/

const for =(let i = 0; i < 5; i++) { //error,mistake
  console.log(i);
}
