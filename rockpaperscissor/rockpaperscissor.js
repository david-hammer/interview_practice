/*! rockpaperscissor v0.0.0 - MIT license */
'use strict';

var rockpaperscissor = function (num) {
  var moves = ['rock', 'paper', 'scissor'];
  var combinations = [];
  if (num === undefined) num = 3;
  (function recurse (curr){
    if (curr.length === num){
      combinations.push(curr.slice());
    } else {
      moves.forEach(function(move){
        curr.push(move);
        recurse(curr);
        curr.pop();
      });
    }
  })([]);
  return combinations;
};
