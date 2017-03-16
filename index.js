// an more effective way to slice Javascript array.
// build a modules which acts as native Array.prototype.slice method, and this function can
// slice array-like object without using Array.prototype.slice.call(obj) which is not so efficient.
// programming logic:
// exports a function takes three parameters: 
//  array/array like value
//  slice start point
//  slice end point
// the function return value is the sliced result.
// Native Array.prototype.slice method key features:
//  1. normal usage:
//  0<= start index < end index <= array.length and both positive integers, 
//  2. the default end index is the last index in this array.
//  3. 