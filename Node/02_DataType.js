// ┌──────────────┬───────────────┬──────────────────────────────────────────────┐
// │ Data Type    │ Example Code  │ Work (Comment Explanation)                   │
// ├──────────────┼───────────────┼──────────────────────────────────────────────┤
// │ Number       │ let a = 10;   │ // Stores numeric values (int & decimal)     │
// │              │ let b = 3.5;  │                                              │
// ├──────────────┼───────────────┼──────────────────────────────────────────────┤
// │ String       │ let name="A"; │ // Stores text inside quotes                 │
// ├──────────────┼───────────────┼──────────────────────────────────────────────┤
// │ Boolean      │ let isOk=true;│ // Stores true or false values               │
// ├──────────────┼───────────────┼──────────────────────────────────────────────┤
// │ Undefined    │ let x;        │ // Variable declared but no value assigned   │
// ├──────────────┼───────────────┼──────────────────────────────────────────────┤
// │ Null         │ let y=null;   │ // Intentionally empty value                 │
// ├──────────────┼───────────────┼──────────────────────────────────────────────┤
// │ BigInt       │ let n=123n;   │ // Stores very large integers                │
// ├──────────────┼───────────────┼──────────────────────────────────────────────┤
// │ Symbol       │ let id=Symbol │ // Creates unique identifiers                │
// │              │ ("user");     │                                              │
// ├──────────────┼───────────────┼──────────────────────────────────────────────┤
// │ Object       │ let obj={     │ // Stores data in key-value pairs             │
// │              │  name:"A",    │                                              │
// │              │  age:18       │                                              │
// │              │ };            │                                              │
// ├──────────────┼───────────────┼──────────────────────────────────────────────┤
// │ Array        │ let arr=[1,2] │ // Stores multiple values in order            │
// ├──────────────┼───────────────┼──────────────────────────────────────────────┤
// │ Function     │ function f(){ │ // Block of reusable code                    │
// │              │  return 1;    │                                              │
// │              │ }             │                                              │
// └──────────────┴───────────────┴──────────────────────────────────────────────┘

"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 
    +
     3) // code readability should be high

console.log("Hitesh")


let name = "hitesh"
let age = 18
let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object
