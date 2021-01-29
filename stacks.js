/* Stacks! */
// first in last out

// functions: push, pop, peek, length

// using array as Stacks

var letters = [] // stack
var word = "racecar"
var rword = ""

// put letters in stack
for(var i=0; i<word.length; i++){
  letters.push(word[i])
}

// pop off the stack
for(var i=0; i<word.length; i++){
  rword += letters.pop()
}

if(rword === word){
  console.log(`${word} is a palindrome`)
}
else{
  console.log(`${word} is not a palindrome`)
}

//---------------------------------------

// using classes for creating Stacks

var Stack = function() {
  this.count = 0
  this.storage = {}

  // adding values
  this.push = (value) => {
    this.storage[this.count] = value
    this.count++
  }

  //remove values
  this.pop = () => {
    if(this.count === 0){
      return undefined
    }

    this.count--
    var result = this.storage[this.count]
    delete result
    return result
  }

  // length of stack
  this.size = () => {
    return this.count
  }

  // return value
  this.peek = () => {
    return this.storage[this.count - 1]
  }
}

var myStack = new Stack()

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("freeCodeCamp");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());