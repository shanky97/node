const _ = require('lodash')

const arr = [1, [2, [3, [4, [5]]]]]

console.log(_.flattenDeep(arr));

 // [1,[2,[3,[4,[5]]]]] =>  [1,2,3,4]
