const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
	}

	push(data, priority) {
		let node = new Node(data, priority);
		this.insertNode(node);
		this.shiftNodeUp(node);
	}

	pop() {

	}

	detachRoot() {
		this.root = null;
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		
	}

	isEmpty() {
		if (this.root) {
			return false;
		} else {
			return true;
		}
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
	}

	insertNode(node) {
		function insert(target, node) {
			if (!target.left) {
				target.left = node;
			} else if (!target.right) {
				target.right = node;
			} else {
				insert(target.left, node); 
			}
		}

		if (!this.root) {
			this.root = node;
		} else {
			insert(this.root, node);
		}
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
