/* Sets */

// creating set 

function mySet() {
  // our set 
  var collection = []

  // check for the presense of element
  this.has = (element) => {
    return (collection.indexOf(element) !== -1)
  }

  //  displaying all elements
  this.values = () => {
    return collection
  }

  // adding elements
  this.add = (element) => {
    if (!this.has(element)) {
      collection.push(element)
      return true
    }
    return false
  }

  // removing elements
  this.remove = (element) => {
    if (!this.has(element)) {
      index = collection.indexOf(element)
      collection.splice(index, 1)
      return true
    }
    return false
  }

  // length of set
  this.size = () => {
    return collection.length
  }

  // union of Sets
  this.union = (otherSet) => {
    var unionSet = new mySet()
    var firstSet = this.values()
    var secondSet = otherSet.values()
    firstSet.forEach((e) => {
      unionSet.add(e)
    })
    secondSet.forEach((e) => {
      unionSet.add(e)
    })
    return unionSet
  }

  // intersection of Sets
  this.intersection = (otherSet) => {
    var intersectionSet = new mySet()
    var firstSet = this.values()
    firstSet.forEach((e) => {
      if (otherSet.has(e)) {
        intersectionSet.add(e)
      }
    })
    return intersectionSet
  }

  // difference of two Sets
  this.difference = (otherSet) => {
    var differenceSet = new mySet()
    var firstSet = this.values()
    firstSet.forEach((e) => {
      if (!otherSet.has(e)) {
        differenceSet.add(e)
      }
    })
    return differenceSet
  }

  // subset of set
  this.subset = (otherSet) => {
    var firstSet = this.values()
    return firstSet.every(function(value) {
      return otherSet.has(value)
    })

    // https://developer.mozilla.org/en-us/docs/web/javascript/reference/global_objects/array/every
  }
}

var setA = new mySet()
var setB = new mySet()
setA.add("a")
setB.add("b")
setB.add("c")
setB.add("a")
setB.add("d")
console.log(setA.subset(setB))
console.log(setA.intersection(setB).values())
console.log(setB.difference(setA).values())

// using ES6 built-in Set method

var setC = new Set()
var setD = new Set()
setC.add("a")
setD.add("b")
setD.add("c")
setD.add("a")
setD.add("d")
console.log(setD.values())
setD.delete("a")
console.log(setD.has("a"))
console.log(setD.add("d"))