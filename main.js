import {LinkedList} from "./linkedList.js"

const list = LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.prepend(5);
list.prepend(1);
console.log(list.toString()); // Output: ( 1 ) -> ( 5 ) -> ( 10 ) -> ( 20 ) -> ( 30 ) -> null

console.log(list.getSize()); // Output: 5
console.log(list.at(2)); // Output: 10

list.pop();
console.log(list.toString()); // Output: ( 1 ) -> ( 5 ) -> ( 10 ) -> ( 20 ) -> null

console.log(list.contains(10)); // Output: true
console.log(list.find(20)); // Output: 3

list.insertAt(15, 3);
console.log(list.toString()); // Output: ( 1 ) -> ( 5 ) -> ( 10 ) -> ( 15 ) -> ( 20 ) -> null

list.removeAt(2);
console.log(list.toString()); // Output: ( 1 ) -> ( 5 ) -> ( 15 ) -> ( 20 ) -> null

console.log(list.getHead()); // Output: { value: 1, next: { ... } }
console.log(list.getTail()); // Output: { value: 20, next: null }
