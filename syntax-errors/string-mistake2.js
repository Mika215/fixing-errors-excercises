'use strict';

/*
  environment:Edge

  name:Uncaught SyntaxError
  message:Unexpected identifier

  callstack:at <anonymous>:2:6
    at HTMLIFrameElement.evaller.onload (study-with.js:56)
    at Object.debugger (study-with.js:58)
    at JavaScriptFE.studyWith (javascript-class.js:463)
    at HTMLButtonElement.<anonymous> (javascript-class.js:293)

  life cycle:creation

  the mistake:an improper usage of double quotation

  the fix(es):replace the outer double quotation with a single one in order to enable js recognize what's exactly happening.the inner double qotation can remain as it is.
*/

const anchorName = "#Home";
//innerHtml is a string variable containing another variable(anchorName) inside it.so it requires to use the single and double qotation consicutively to identifay the diffrence between the string and the variable embraced inside the string
const innerHtml = "<p>Click here to <a href="anchorName">go home</a></p>";//error, mistake


