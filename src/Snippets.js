// * External function call
// * Target is to call external function/closure on object because this is bound to caller object
function addProperty () {
  this.val = 6
}

function makeClosure (thing) {
  return function () {
    this.val += thing.param
  }
}

let obj = {
  val: 6,
  print: function () {
    console.log('>> ', this.val)
  }
}

let clos = makeClosure({param: 30})

addProperty.call(obj)
obj.print()

clos.call(obj)
obj.print()

// * array from Map for Vue templates
let map = new Map().set('a', 1).set('b', 2)
let arr = Array.from(map.entries())

console.log(arr)
// * *** *** ***
let arr2 = [1,2,3,4]

let arrRef = arr2
arr2 = []

console.log(arr2)
console.log(arrRef)
