'use strict';

/*
  environment:Edge
  name: TypeError:
  message:Cannot read property 'length' of null

  callstack: at eval (eval at <anonymous> (primitive-type-mistake.js:2), <anonymous>:25:23)
    at <anonymous>:2:1
    at HTMLIFrameElement.evaller.onload (study-with.js:56)
    at Object.debugger (study-with.js:58)
    at JavaScriptFE.studyWith (javascript-class.js:463)
    at HTMLButtonElement.<anonymous> (javascript-class.js:293)

  life cycle:execution 

  the mistake:it's impossible to mesure the length of something that doesn't exist(null)

  the fix(es):change the type of userInput from object to String using quotation marks''
*/

const userInput ='null';//mistake;

console.log(userInput.length);//error
