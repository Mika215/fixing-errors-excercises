'use strict';

/*
  environment:Edge

  name:Uncaught SyntaxError
  message: Unexpected token '{'

  callstack:at <anonymous>:2:6
    at HTMLIFrameElement.evaller.onload (study-with.js:56)
    at Object.debugger (study-with.js:58)
    at JavaScriptFE.studyWith (javascript-class.js:463)
    at HTMLButtonElement.<anonymous> (javascript-class.js:293)

  life cycle:creation

  the mistake:mising a key word for if conditional

  the fix(es):adding the missing 'if' keyword to make the second conditional argument correct ('else if')
*/

const userName = 'indrogo';

if (userName.length < 3) {
  console.log('too short');

} //we can not use else 2nd time insted it should be 'else if'
else (userName.length < 5) { //error,mistake
  console.log('just right');
} else {
  console.log('too long');
}
