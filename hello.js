'use strict'
var s = 'Hello';

function greet(name){
    console.log(`${s}, ${name}!`)
};

function foo(){
    console.log('Hello, world!');
}

module.exports = greet;


// exports.foo = function () { return 'foo'; };