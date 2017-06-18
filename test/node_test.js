"use strict";
const chai = require('chai');
const expect = chai.expect

const Node = require('../node');

describe("Node", function() {
	let node;
	context("upon instantiation with no value", function() {
		beforeEach(function() {
			node = new Node();
		})

		it("has a value of undefined for val", function() {
			expect(node.val).to.equal(undefined);
		})

		it("has a value of undefined for next", function() {
			expect(node.next).to.equal(undefined);
		})
	})

	context("upon instantiation with a value", function() {
		beforeEach(function() {
			node = new Node(1);
		})

		it("has a value of 1 for val", function() {
			expect(node.val).to.equal(1);
		})

		it("has a value of undefined for left", function() {
			expect(node.left).to.equal(undefined);
		})

		it("has a value of undefined for right", function() {
			expect(node.right).to.equal(undefined);
		})
	})

	it("can add another Node to the left property", function() {
		node = new Node(1);
		node.left = new Node(2);

		expect(node.left.val).to.equal(2);
		expect(node.left).to.be.an("object");
		expect(node.left).to.be.an.instanceof(Node);
	})

	it("can't add a non-Node to left property", function() {
		node = new Node(1);
		node.left = 1;
		expect(node.left).to.equal(undefined);
		
		node.left = [];
		expect(node.left).to.equal(undefined);
	})

	it("can add another Node to the right property", function() {
		node = new Node(1);
		node.right = new Node(2);

		expect(node.right.val).to.equal(2);
		expect(node.right).to.be.an("object");
		expect(node.right).to.be.an.instanceof(Node);
	})

	it("can't add a non-Node to right property", function() {
		node = new Node(1);
		node.right = 1;
		expect(node.right).to.equal(undefined);
		
		node.right = [];
		expect(node.right).to.equal(undefined);
	})
})