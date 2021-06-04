'use strict';

/*
  environment:Edge(Microsoft)

  name:SyntaxError
  message:Invalid left-hand side in assignment

  callstack: at <anonymous>:2:6
    at HTMLIFrameElement.evaller.onload (study-with.js:56)
    at Object.debugger (study-with.js:58)
    at JavaScriptFE.studyWith (javascript-class.js:463)
    at HTMLButtonElement.<anonymous> (javascript-class.js:293)

  life cycle: execution 

  the mistake:variable was not assigned properly(wrong placement)

  the fix(es):exchange the place of variable isHappy with its value 'true' vis versa 
*/

let isHappy = false;

 true = isHappy; //error, Mistake 
