const Node = require('./node');

class BSTError extends Error {
	constructor(...args) {
		super(...args);
	}
}

class BST {
	constructor() {
		this._root = undefined;
	}

	get root() { return this._root; }

	insert(val) {
		if(typeof val === 'undefined') this._undefinedVal();
		if(!this._root) {
			this._root = new Node(val);
			return this;
		}

		// Refactor  into the node class
		if(typeof val !== typeof this._root.val) this._wrongVal();

		this._add(this._root, val);

		return this;
	}

	contains(val) {
		if(!this._root) return false;
		if(typeof this._root.val !== typeof val) return false
		if(this._root.val === val) return true;
		const result = this._find(this._root, val);
		return result === true
	}

	toArray(input = "asc") {
		const arr = [], order = input.toLowerCase();
		
		switch(order) {
			case "asc":
				this._inorderConcat(this._root, val => arr.push(val));
				break;
			case "desc":
				this._reverseConcat(this._root, val => arr.push(val));
				break;
			default:
				this._invalidDirectionError(input);
		}

		return arr;
	}

	toString(input="asc", delimeter=",") {
		let str = "";
		const order = input.toLowerCase();

		switch(order) {
			case "asc":
				this._inorderConcat(this._root, val => {
					if(str === '') str += val;
					else	str += `${delimeter} ${val}`
				});
				break;
			case "desc":
				this._reverseConcat(this._root, val => {
					if(str === '') str += val;
					else	str += `${delimeter} ${val}`
				});
				break;
			default:
				this._invalidDirectionError(input);
		}

		return str;
	}

	_add(node, val) {
		if(!node) return new Node(val);

		if(node.val > val) node.left = this._add(node.left, val);
		else if(node.val < val) node.right = this._add(node.right, val);
		return node;
	}

	_find(node, val) {
		if (!node) return false;
		if (node.val === val) return true;
		if (node.val > val) return this._find(node.left, val);
		else if(node.val < val) return this._find(node.right, val);
	}

	_inorderConcat(node, callback) {
		if(!node) return;
		this._inorderConcat(node.left, callback);
		callback(node.val);
		this._inorderConcat(node.right, callback);
	}

	_reverseConcat(node, callback) {
		if(!node) return;
		this._reverseConcat(node.right, callback);
		callback(node.val);
		this._reverseConcat(node.left, callback);
	}

	_invalidDirectionError(dir) { throw new BSTError(`the value ${dir || 'given'} is not a valid order to pass the function.`); }
	_wrongVal() { throw new BSTError("the value passed does not match the type of the remainder of the list."); }
	_undefinedVal() { throw new BSTError("the value passed was undefined."); }
}
module.exports = {
	BST: BST, 
	BSTError: BSTError
};
