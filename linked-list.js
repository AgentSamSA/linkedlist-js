// ListNode class

class ListNode {
	constructor(element) {
		this.element = element;
		this.next = null;
	}
}

// LinkedList class

class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}
	// add element at the end
	add(element) {
		let node = new Node(element);

		let current;

		if (this.head == null) {
			this.head = node;
		} else {
			current = this.head;

			while (current.next) {
				current = current.next;
			}

			current.next = node;
		}
		this.size++;
	}
	// add element at specific index
	insertAt(element, index) {
		if (index < 0 || index > this.size) return console.log("Please use a valid index.");
		else {
			let node = new Node(element);
			let curr, prev;

			curr = this.head;

			if (index == 0) {
				node.next = this.head;
				this.head = node;
			} else {
				curr = this.head;
				let i = 0;

				while (i < index) {
					i++;
					prev = curr;
					curr = curr.next;
				}

				node.next = curr;
				prev.next = node;
			}
		}
		this.size++;
	}
	// remove element at specific index
	removeAt(index) {
		if (index < 0 || index >= this.size) return console.log("Please use a valid index.");
		else {
			let curr, prev, i = 0;
			curr = this.head;
			prev = curr;

			if (index == 0) {
				this.head = curr.next;
			} else {
				while (i < index) {
					i++;
					prev = curr;
					curr = curr.next;
				}

				prev.next = curr.next;
			}
		}
		this.size--;

		return curr.element;
	}
	// remove specific element
	removeElement(element) {
		let current = this.head;
		let prev = null;

		while (current != null) {
			if (current.element === element) {
				if (prev == null) {
					this.head = current.next;
				} else {
					prev.next = current.next;
				}
				this.size--;

				return current.element;
			}
			prev = current;
			current = current.next;
		}

		return - 1;
	}
	// finds index of element
	indexOf(element) {
		let count = 0;
		let current = this.head;

		while (current != null) {
			if (current.element === element) return count;
			count++;
			current = current.next;
		}

		return - 1;
	}
	// checks if list is empty
	isEmpty() {
		return this.size == 0;
	}
	// gives the size of the list
	sizeOfList() {
		return this.size;
	}
	// prints the contents of the list
	printList() {
		let curr = this.head;
		let string = "";

		while (curr) {
			string += curr.element + " ";
			curr = curr.next;
		}
		console.log(string);
	}
}