'use strict';

/*
  environment:jsTutorLive //(this excercise doesn't throw an error both in chrome and Edge - i can't understand why)
  but jsTutorLive caught it well!

  name:ReferenceError: 
  message:welf is not defined

  callstack: //*****i was wondering where the Callstack is found in jsToutorLive; if it exists****

  life cycle:execution

  the mistake: trying to access an undeclared variable 

  the fix(es):declare variable "welf" using let/const
*/
//welf should be declared using let or const
welf = 'ingrad'; //error, mistake 

console.log(welf);