"use strict";
class Node {
	constructor(val) {
		this._val = val || undefined;
		this._left = undefined;
		this._right = undefined;
	}

	get val() { return this._val;	}

	set val(val) { this._val = val; }

	get left() { return this._left }
	get right() { return this._right }

	set left(node) { if(node instanceof Node || typeof node === 'undefined') this._left = node }
	set right(node) { if(node instanceof Node || typeof node === 'undefined') this._right = node }

}

module.exports = Node;