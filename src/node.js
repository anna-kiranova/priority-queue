class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if (!this.left) {
			this.left = node;
			node.parent = this;
		} else if (!this.right) {
			this.right = node;
			node.parent = this;
		}
	}

	removeChild(node) {
		if (this.left === node) {
			this.left = null;
			node.parent = null;
		} else if (this.right === node) {
			this.right = null;
			node.parent = null;
		} else {
			throw new Error('Error: Passed node is not a child of this node');
		}
	}

	remove() {
		if (this.parent) {
			this.parent.removeChild(this);
		}
	}

	swapWithParent() {
		if (this.parent) {
			let GP = this.parent.parent;
			let RO = this.parent;
			let L = RO.left;
			let R = RO.right;
			let X = this.left;
			let Y = this.right;

			if (this === L) {
				if (GP) {
					if (GP.left === RO) {
						GP.left = L;
					} else {
						GP.right = L;
					}
				}
				L.parent = GP;
				L.left = RO;
				RO.parent = L;
				L.right = R;
				if (R) {
					R.parent = L;
				}
			} else {
				// this === R
				if (GP) {
					if (GP.left === RO) {
						GP.left = R;
					} else {
						GP.right = R;
					}
				}
				R.parent = GP;
				R.left = L;
				if (L) {
					L.parent = R;
				}
				RO.parent = R;
				R.right = RO;
			}
			RO.left = X;
			if (X) {
				X.parent = RO;
			}
			RO.right = Y;
			if (Y) {
				Y.parent = RO;
			}
		}
	}
}

module.exports = Node;
