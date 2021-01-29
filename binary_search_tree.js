/* Binary Search Tree */
// each node can have only 2 branches
// leftnode is always less than parent node
// right node is always greater than parent node
// https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Tree-data-structure.svg/800px-Tree-data-structure.svg.png

// node class
class Node{
  constructor(data, left = null, right = null){
    this.data = data
    this.left = left
    this.right = right
  }
}

// Binary Search Tree
class BST{
  constructor(){
    this.root = null
  }

  // adding data to Tree
  add(data){
    const node = this.root
    if(node === null){
      this.root = new Node(data)
      return
    } else {
      const searchTree = function(node){
        if(data < node.data){
          if(node.left === null){
            node.left = new Node(data)
            return
          } else if(node.left !== null){
            return searchTree(node.left)
          }
        } else if(data > node.data){
          if(node.right === null){
            node.right = new Node(data)
            return
          }else if(node.right !== null){
            return searchTree(node.right)
          }
        } else {
          return null
        }
      }
      return searchTree(node)
    }
  }

  // minimum value in the Tree
  findMin(){
    let current = this.root
    while(current.left !== null){
      current = current.left
    }
    return current.data
  }

  // maximum value in the Tree
  findMax(){
    let current = this.root
    while(current.right !== null){
      current = current.right
    }
    return current.data
  }

  // finding value in the Tree
  find(data){
    let current = this.root
    while(current.data !== data){
      if(data < current.data){
        current = current.left
      } else {
        current = current.right
      }
      if(current === null) {
        return null
      }
    }
    return current
  }

  // searching whether value is present in the Tree
  isPresent(data){
    let current = this.root
    while(current){
      if(data === current.data){
        return true
      }
      if(data < current.data){
        current = current.left
      } else {
        current = current.right
      }
    }
    return false
  }

  // removing data from the Tree
  remove(data){
    const removeNode = function(node, data){
      if(node == null){
        return null
      }
      if(data == node.data){
        // node has no children
        if(node.left == null && node.right == null){
          return null
        }
        // node has no left child
        if(node.left == null){
          return node.right
        }
        // node has no right child
        if(node.right == null){
          return node.left
        }
        // node has two children
        var tempNode = node.right
        while(tempNode.left !== null){
          tempNode = tempNode.left
        }
        node.data = tempNode.data
        node.right = removeNode(node.right, tempNode.data)
        return node
      } else if(data < node.data){
        node.left = removeNode(node.left, data)
        return node
      } else {
        node.right = removeNode(node.right, data)
        return node
      }
    }
    this.root = removeNode(this.root, data)
  }

  // Heights of Tree

  // to check the balance of Tree
  // difference between minimum height and maximum height is 1 or 0
  isBalanced(){
    return (this.findMinHeight() >= this.findMaxHeight() - 1)
  }
  
  // minimum height of the Tree
  findMinHeight(node = this.root){
    if(node == null){
      return -1
    }
    let left = this.findMinHeight(node.left)
    let right = this.findMinHeight(node.right)
    if(left < right){
      return left + 1
    } else {
      return right + 1
    }
  }

  // maximum height of the Tree
  findMaxHeight(node = this.root){
    if(node == null){
      return -1
    }
    let left = this.findMaxHeight(node.left)
    let right = this.findMaxHeight(node.right)
    if(left > right){
      return left + 1
    } else{
      return right + 1
    }
  }

  // Traversing through Tree
  
  // inOrder traversal
  // traversing in order either from left-most node or right-most node
  inOrder(){
    if(this.root == null){
      return null
    } else {
      var result = new Array()
      function traverseInOrder(node){
        node.left && traverseInOrder(node.left)
        result.push(node.data)
        node.right && traverseInOrder(node.right)
      }
      traverseInOrder(this.root)
      return result
    }
  }

  // preOrder traversal
  // exploring root nodes first before leaf nodes
  preOrder(){
    if(this.root == null){
      return null
    } else {
      var result = new Array()
      function traverseInOrder(node){
        result.push(node.data)
        node.left && traverseInOrder(node.left)
        node.right && traverseInOrder(node.right)
      }
      traverseInOrder(this.root)
      return result
    }
  }

  // postOrder traversal
  // exploring leaf nodes first before root nodes
  postOrder(){
    if(this.root == null){
      return null
    } else {
      var result = new Array()
      function traverseInOrder(node){
        node.left && traverseInOrder(node.left)
        node.right && traverseInOrder(node.right)
        result.push(node.data)
      }
      traverseInOrder(this.root)
      return result
    }
  }

  // levelOrder traversal
  // exploring all nodes in given level before proceeding to other
  levelOrder(){
    let result = []
    let Q = []
    if(this.root != null){
      Q.push(this.root)
      while(Q.length > 0){
        let node = Q.shift()
        result.push(node.data)
        if(node.left != null){
          Q.push(node.left)
        }
        if(node.right != null){
          Q.push(node.right)
        }
      }
      return result
    } else{
      return null
    }
  }
}


const bst = new BST()

bst.add(9)
bst.add(4)
bst.add(17)
bst.add(3)
bst.add(6)
bst.add(22)
bst.add(5)
bst.add(7)
bst.add(20)

console.log(bst.findMinHeight())
console.log(bst.findMaxHeight())
console.log(bst.isBalanced())
bst.add(10)
console.log(bst.findMinHeight())
console.log(bst.findMaxHeight())
console.log(bst.isBalanced())
console.log('inOrder: ' + bst.inOrder())
console.log('preOrder: ' + bst.preOrder())
console.log('postOrder: ' + bst.postOrder())

console.log('levelOrder: ' + bst.levelOrder())