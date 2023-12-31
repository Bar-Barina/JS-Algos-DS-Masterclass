'use strict'

class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  get(index) {
    if (index < 0 || index >= this.length) return null
    let middle = this.length / 2
    if (index <= middle) {
      while (counter !== index) {
        let counter = 0
        let currNode = this.head
        currNode = currNode.next
        counter++
      }
    }
    if (index >= middle) {
      while (counter !== index) {
        let counter = this.length - 1
        let currNode = this.tail
        currNode = currNode.prev
        counter--
      }
    }
    return currNode
  }
}
