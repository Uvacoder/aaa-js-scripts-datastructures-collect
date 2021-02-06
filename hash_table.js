/* Hash Table */

var hash = (string, max) => {
  var hash = 0
  for (var i = 0; i < string.length; i++) {
    hash += sting.charCodeAt(i)
  }
  return hash % max
}

let HasTable = function() {

  let storage = []
  const storageLimit = 4 // for instance

  this.print = function() {
    console.log(storege)
  }

  this.add = function(key, value) {
    var index = hash(key, storageLimit)
    if (storage[index] === undefined) {
      storage[index] = [
        [key, value]
      ]
    } else {
      var inserted = false
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          storage[index][i][1] = valueinserted = true
        }
      }
      if (inserted === false) {
        storage[index].push([key, value])
      }
    }
  }
}