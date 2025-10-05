// Aspect 1: Valid Numeric String Conversion
console.log("Aspect 1");

let score = "33";  // A string that represents a valid number
console.log("Before Conversion score : " + score + " --> " + typeof (score));  
// Output: string

let scoreInNumber = Number(score);  // Explicitly converting string to number using Number()

console.log("After Conversion score : " + scoreInNumber + " --> " + typeof (scoreInNumber));  
// Output: number - Conversion successful


// Aspect 2: Invalid Numeric String Conversion
console.log("Aspect 2");

let serialNo = "33ac";  // A string that contains non-numeric characters
console.log("Before Conversion serialNo : " + serialNo + " --> " + typeof (serialNo));  
// Output: string

let serialNoInNumber = Number(serialNo);  // Trying to convert invalid numeric string to number

console.log("After Conversion serialNo : " + serialNoInNumber + " --> " + typeof (serialNoInNumber));  
// Output: NaN --> number
// Even though the value is NaN (Not-a-Number), typeof still returns 'number'
// This is a known behavior (quirk) in JavaScript

/*
===========================
 JavaScript Type Conversion Reference
===========================

1. String → Number
-------------------
✅ Number("42")        → 42
❌ Number("42px")      → NaN
❌ Number("hello")     → NaN
✅ Number("  15  ")    → 15     // Whitespace is ignored
✅ Number("")          → 0      // Empty string becomes 0

2. Boolean → Number
-------------------
Number(true)          → 1
Number(false)         → 0

3. Number → String
-------------------
String(100)           → "100"
(100).toString()      → "100"

4. Boolean → String
-------------------
String(true)          → "true"
String(false)         → "false"

5. String → Boolean
-------------------
Boolean("hello")      → true     // Any non-empty string is true
Boolean("")           → false

6. Number → Boolean
-------------------
Boolean(1)            → true
Boolean(0)            → false
Boolean(-1)           → true
Boolean(NaN)          → false

7. null and undefined
-------------------
Number(null)          → 0
Number(undefined)     → NaN

String(null)          → "null"
String(undefined)     → "undefined"

Boolean(null)         → false
Boolean(undefined)    → false

8. Array → Number
-------------------
Number([])            → 0
Number([5])           → 5
Number([1,2])         → NaN

9. Object → Number
-------------------
Number({})            → NaN
Number({valueOf: () => 5}) → 5   // if valueOf is defined

10. Special Cases
-------------------
Boolean([])           → true      // Empty array is truthy
Boolean({})           → true      // Empty object is truthy
Boolean(NaN)          → false
Boolean(null)         → false
Boolean(undefined)    → false

===========================
 Tip: Use typeof() and isNaN() to inspect and validate values
===========================
*/

