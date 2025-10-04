"use strict";  // treat all js code as new version 
/* 
"use strict" is a directive that tells the JavaScript engine to run the code in Strict Mode. 
Strict Mode was introduced in ES5 (ECMAScript 5) to make JavaScript safer and less error-prone.
ex : a = 6;    while we write "use strict this will give error"    => const/var/let a = 6;
*/

// alert(3+3);  // gives error => we are using node.js(JavaScript Runtime Environment), not browser

// console.log(3+
//     3
// );
// console.log(3+3);    // code readability Should be high

// Primitive Datatypes => String,Number,BigInt,Boolean,undefined,null,symbol
// 1. String => " "  or  ' '
let name = "Alice";
console.log(typeof name); // string

// 2. Number => Range -> 2 to power 53
let age = 25;
console.log(typeof age); // number

// 3. BigInt (for very large numbers)
let bigNumber = 1234567890123456789012345678901234567890n;
console.log(typeof bigNumber); // bigint

// 4. Boolean => true/false
let isLoggedIn = true;
console.log(typeof isLoggedIn); // boolean

// 5. Undefined (variable declared but not assigned)  
let something;
console.log(typeof something); // undefined => value abhi assign nhi hui

// 6. null (intentional empty value) / standalone value
let empty = null;
console.log(typeof empty); // object (this is a known JS quirk)

// 7. Symbol (unique identifier)
let uniqueId = Symbol("id");
console.log(typeof uniqueId); // symbol

// Non Primitive Datatype => object,array,function

// 8. Object (used for collections)
let person = {
  name: "Bob",
  age: 30
};
console.log(typeof person); // object

// 9. Array (a special kind of object)
let colors = ["red", "green", "blue"];
console.log(typeof colors); // object
console.log(Array.isArray(colors)); // true (to check if it's an array)

// 10. Function (also a type of object)
function greet() {
  console.log("Hello!");
}
console.log(typeof greet); // function 