/*jslint undef: true, nomen: true, eqeqeq: true, newcap: true, immed: true */

/**
 * @param {Element} element
 * @param {NodeList|Array.<Element>} boxes inside the element
 * @constructor
 */
function HorizontalBoxSlider(element, boxes) {
	this.initialize(element, boxes);
}

/**
 * @param {Element} element
 * @param {NodeList|Array.<Element>} boxes inside the element
 */
HorizontalBoxSlider.prototype.initialize = function(element, boxes) {
	this.element = element;
	this.boxes = boxes;
};

/**
 * @param {number} [x] >= 0
 */
HorizontalBoxSlider.prototype.left = function(x) {
	this.element.scrollLeft = x;
};

/**
 * @param {Element} element
 * @nosideeffects
 * @return {number}
 */
HorizontalBoxSlider.prototype.offsetLeftOf = function(element) {
	var x = 0;
	while (element.offsetParent !== null && element !== this.element) {
		x += element.offsetLeft;
		element = element.offsetParent;
	}
	return x;
};

/**
 * @param {Element} element to scroll to
 */
HorizontalBoxSlider.prototype.scrollTo = function(element) {
	this.left(this.offsetLeftOf(element));
};

/**
 * @param {Element} element
 */
HorizontalBoxSlider.prototype.scrollToRightEdgeOf = function(element) {
	var width = this.element.offsetWidth;
	this.left(this.offsetLeftOf(element) + element.offsetWidth - width);
};

/**
 * @nosideeffects
 * @return {number} index of the first visible box
 */
HorizontalBoxSlider.prototype.currentIndex = function() {
	var boxes = this.boxes;
	var left = this.element.scrollLeft;
	var right = left + this.element.offsetWidth;
	for (var i = 0; i < boxes.length; ++i) {
		var boxLeft = boxes[i].offsetLeft;
		var boxRight = boxLeft + boxes[i].offsetWidth;
		if ((boxLeft >= left && boxLeft < right) || (boxRight > left && boxRight <= right) || (boxLeft <= left && boxRight >= right)) {
			return i;
		}
	}
};

/**
 * @nosideeffects
 * @return {Element|undefined} first box with non-visible right egde
 */
HorizontalBoxSlider.prototype.nextBox = function() {
	var i = this.currentIndex();
	var boxes = this.boxes;
	var right = this.element.scrollLeft + this.element.offsetWidth;
	var box;
	do {
		box = boxes[++i];
		if (!box) {
			break;
		}
	} while (box.offsetLeft + box.offsetWidth <= right);
	return box;
};

HorizontalBoxSlider.prototype.next = function() {
	var box = this.nextBox();
	if (box) {
		this.scrollToRightEdgeOf(box);
	}
};

/**
 * @nosideeffects
 * @return {Element}
 */
HorizontalBoxSlider.prototype.previousBox = function() {
	var i = this.currentIndex();
	var boxes = this.boxes;
	if (i > 0 && boxes[i].offsetLeft >= this.element.scrollLeft) {
		i--;
	}
	return this.boxes[i];
};

HorizontalBoxSlider.prototype.previous = function() {
	var box = this.previousBox();
	if (box) {
		this.scrollTo(box);
	}
};

HorizontalBoxSlider.prototype.scrollToStart = function() {
	this.left(0);
};

HorizontalBoxSlider.prototype.scrollToEnd = function() {
	this.left(this.element.scrollWidth || 1E9);
};
