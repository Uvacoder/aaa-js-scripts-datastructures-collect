/* Queue */
// first in first out

// simple queue 

function Queue(){
  collection = []

  // displaying elements
  this.print = () => {
    return collection
  }

  // adding elements 
  this.enqueue = (element) => {
    collection.push(element)
  }

  // removing element
  this.dequeue = () => {
    // https://developer.mozilla.org/en-us/docs/web/javascript/reference/global_objects/array/shift
    return collection.shift()
  }

  // first element
  this.front = () => {
    return collection[0]
  }

  // length of Queue
  this.size = () => {
    return collection.length
  }

  // state of queue
  this.isEmpty = () => {
    return (collection.length === 0)
  }
}

var q = new Queue()
q.enqueue('a')
q.enqueue('b')
q.enqueue('c')
console.log(q.print())
q.dequeue()
console.log(q.front())
console.log(q.print())

// Priority queue

function PriorityQueue(){
  var collection = []

  this.printCollection = function() {
    (console.log(collection))
  }
  this.enqueue = function(element) {
    if(this.isEmpty()){
      collection.push(element)
    }
    else{
      var added = false
      for(var i=0; i<collection.length; i++){
        if(element[1] < collection[i][1]){
          // checking priorities
          collection.splice(i,0,element)
          added = true
          break
        }
      }
      if(!added){
          collection.push(element)
      }
    }
  }
  this.dequeue = function() {
    var value = collection.shift()
    return value[0]
  }

  this.front = function() {
    return collection[0]
  }

  this.size = function() {
    return collection.length
  }

  this.isEmpty = function() {
    return (collection.length === 0)
  }
}

var pq = new PriorityQueue(); 
pq.enqueue(['Python', 2]); 
pq.enqueue(['C++', 3]);
pq.enqueue(['JavaScript', 1])
pq.enqueue(['Go Lang', 2])
pq.printCollection();
pq.dequeue();
console.log(pq.front());
pq.printCollection();