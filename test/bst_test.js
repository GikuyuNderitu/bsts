"use strict";
const chai = require('chai');
const expect = chai.expect;

const BSTstuff = require('../bst');
const BST = BSTstuff.BST;
const BSTError = BSTstuff.BSTError;

describe("BST", function() {
	let tree;
	beforeEach(function() {
		tree = new BST();
	})

	context("has the correct objecthood", function () {
		it("is an object", function () {
			expect(tree).to.be.an("object");
		})

		it("is an BST object", function () {
			expect(tree).to.be.an.instanceof(BST);
		})
	})


	describe("#insert(val)", function() {
		context("with an empty list", function() {
			it("inserts the value at the root node", function() {
				tree.insert(5);
				expect(tree.root.val).to.equal(5);
			})
		})

		context("with a populated list", function() {
			beforeEach(function() {
				tree.insert(5).insert(4).insert(6).insert(2).insert(10);
			})

			it("throws an error if the value passed is undefined", function() {
				expect(tree._undefinedVal).to.throw(BSTError);
				expect(tree._undefinedVal).to.throw("the value passed was undefined.");				
			})

			it("throws an error if the value passed does not match the rest of the list", function() {
				expect(tree._wrongVal).to.throw(BSTError);
				expect(tree._wrongVal).to.throw("the value passed does not match the type of the remainder of the list.");
			})
		})
	})

	describe("#contains(val)", function() {
		context("with an empty tree", function() {
			it("returns false", function () {
				expect(tree.contains(5)).to.equal(false);
			})
		})

		context("with a populated tree", function() {
			beforeEach(function() {
				tree.insert(5).insert(4).insert(6).insert(2).insert(10);
			})

			it("returns true if the value is in the tree", function() {
				expect(tree.contains(10)).to.equal(true);
			})

			it("returns false if the value is not in the tree", function() {
				expect(tree.contains(9)).to.equal(false);
			})
		})
	})

	describe("#toArray([order])", function() {
		it("returns a value that is an Array", function() {
			expect(tree.toArray()).to.be.an.instanceof(Array);
		})

		context("with an empty tree", function() {
			it("returns an empty array", function() {
				expect(tree.toArray()).to.eql([]);
			})
		})

		context("with a prepopulated tree", function() {
			beforeEach(function() {
				tree.insert(5).insert(4).insert(6).insert(2).insert(10);
			})

			it("returns an array sorted in order", function() {
				expect(tree.toArray()).to.eql([2, 4, 5, 6, 10]);
			})

			it("returns an array sorted in descending order", function() {
				expect(tree.toArray("desc")).to.eql([10, 6, 5, 4, 2]);				
			})

			it("throws error if given an argument that does not match 'asc' or 'desc'", function() {
				expect(tree._invalidDirectionError).to.throw(BSTError);
				expect(tree._invalidDirectionError).to.throw(`the value given is not a valid order to pass the function.`)
			})
		})
	})

	describe("#toString([order])", function() {
		it("returns a value that is an string", function() {
			expect(tree.toString()).to.be.a('string');
		})

		context("with an empty tree", function() {
			it("returns an empty string", function() {
				expect(tree.toString()).to.equal("");
			})
		})

		context("with a prepopulated tree", function() {
			beforeEach(function() {
				tree.insert(5).insert(4).insert(6).insert(2).insert(10);
			})

			it("returns an string sorted in order", function() {
				expect(tree.toString()).to.equal("2, 4, 5, 6, 10");				
			})

			it("returns an string sorted inorder with a given delimeter", function() {
				expect(tree.toString(undefined, " |")).to.equal("2 | 4 | 5 | 6 | 10");								
			})

			it("returns an string sorted in descending order", function() {
				expect(tree.toString("DESC")).to.equal("10, 6, 5, 4, 2");								
			})

			it("returns an string sorted in descending order with a given delimeter", function() {
				expect(tree.toString("DESC", " |")).to.equal("10 | 6 | 5 | 4 | 2");								
			})
		})
	})
})