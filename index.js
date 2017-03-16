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
// 	See ECMA 22.1.3.23 Array.prototype.slice (start, end)
// 	
// 	Actual, this slice function is not behalf as the same as native Array.prototype.slice 
// 	method, which will convert start and end index value to interge according to ECMAScript
// 	rules ans so on. In a word, this slice function depends on we use the function properly.

function slice(arg, slice, sliceEnd) {
	var array = [];
	var len = arg.length;

	// return early
	if (len === 0) {
		return array;
	}

	// change the following code to the version below it
	/*
	if (slice !== undefined) {
		slice = slice < 0 ? 
			Math.max(len + slice, 0):
			Math.min(slice, len);		
	} else {
		slice = 0;
	}	
	 */
	slice = slice < 0 ? 
		Math.max(len + slice, 0):
		Math.min(slice, len) || 0;


	// the follwing code logic is the normal version, but we can improve it, by 
	// 'merge' len and sliceEnd two values. Change my mind about loop, loop does not 
	// always begin from low index, it can begin from the end index.
	/*
	if (sliceEnd !== undefined) {
		sliceEnd = sliceEnd < 0 ?
			Math.max(len + sliceEnd, 0):
			Math.min(sliceEnd, len);
	} else {
		sliceEnd = len;
	}

	var count = Math.max(sliceEnd - slice, 0);

	for (var i = 0; i < count; i++) {
		array[i] = arg[slice + i];
	}
	 */
	 if (sliceEnd !== undefined) {
	 	len = sliceEnd < 0 ?
	 		Math.max(len + sliceEnd, 0):
	 		Math.min(sliceEnd, len);
	 }
	 // think about the loop. We may decide firstly, that to slice a part of array,
	 // we may always start the loop from the len index, which we can sign it the
	 // value of sliceEnd
	 while (len-- > slice) {
	 	array[len - slice] = arg[len];
	 }


	return array;
}


function sliceV2(args, slice, sliceEnd) {
  var ret = [];
  var len = args.length;

  if (0 === len) return ret;

  var start = slice < 0
    ? Math.max(0, slice + len)
    : slice || 0;

  if (sliceEnd !== undefined) {
    len = sliceEnd < 0
      ? sliceEnd + len
      : sliceEnd
  }

  while (len-- > start) {
    ret[len - start] = args[len];
  }

  return ret;
}







/*     for test      */
var a = [1,2,3,4,5,6];
console.log(slice(a, 0, 3));
console.log(slice(a, 0));
console.log(slice(a));

console.log(slice(a, 0, 30));
console.log(slice(a, -4, -1));
console.log(slice(a, -1, -4));
console.log(slice(a, -4, -4));
console.log(slice(a, 2, -1));

var b = {
	0: 'Bowen',
	1: 'John',
	2: 'Leo',
	3: 'Smith',
	4: 'Thomas',
	length: 5
};

var c = {
	0: 'Bowen',
	1: 'John',
	2: 'Leo',
	3: 'Smith',
	4: 'Thomas'
};

console.log(slice(b, 0, 2));
console.log(slice(b, 0));
console.log(slice(b));

console.log(slice(b, -3, -1));
console.log(slice(b, -1, -3));
console.log(slice(b, 3, 30));

console.log('aaaaaaa:', slice(c, 0, 3)); // []



console.log(sliceV2(b, 0, 2));
console.log(sliceV2(b, 0.2, 2.4));
console.log(slice(b, 0.2, 2.4));

console.log(sliceV2(b));
console.log(slice(c, 0, 2));
console.log(sliceV2(b));
console.log(sliceV2(a, 0, 30));
console.log(sliceV2(c, 0, 2));
console.log(sliceV2(c));

























