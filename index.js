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

function slice(arg, slice, sliceEnd) {
	var array = [];
	var len = arg.length;

	if (slice !== undefined) {
		slice = slice < 0 ? 
			Math.max(len + slice, 0):
			Math.min(slice, len);		
	} else {
		slice = 0;
	}


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

	return array;
}

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

console.log(slice(c, 0, 3)); // []




// function sliceV2(args, slice, sliceEnd) {
//   var ret = [];
//   var len = args.length;

//   if (0 === len) return ret;

//   var start = slice < 0
//     ? Math.max(0, slice + len)
//     : slice || 0;

//   if (sliceEnd !== undefined) {
//     len = sliceEnd < 0
//       ? sliceEnd + len
//       : sliceEnd
//   }

//   while (len-- > start) {
//     ret[len - start] = args[len];
//   }

//   return ret;
// }

// console.log(sliceV2(b, 0, 2));
// console.log(sliceV2(b, 0.2, 2.4));
// console.log(slice(b, 0.2, 2.4));

// console.log(sliceV2(c, 0, 2));
// console.log(slice(c, 0, 2));

























