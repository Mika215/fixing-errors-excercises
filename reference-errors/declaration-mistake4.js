'use strict';

/*
  environment:jsTutorLive //(this excercise doesn't throw an error both in chrome and Edge - i can't understand why)
  but jsTutorLive caught it well!

  name:ReferenceError: 
  message:seven is not defined

  callstack: //*****i was wondering where the Callstack is in jsToutorLive; if it exists****

  life cycle:execution

  the mistake: trying to access an undeclared variable 

  the fix(es):declare variable 'seven' using let/const
*/

const add = (x = 0, y = 0) => {
  return x + y;
};
//this variable should be declared using let/const
seven = add(3, 4);//error, mistake 
