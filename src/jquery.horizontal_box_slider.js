/**
* @depend horizontal_box_slider.js
*/
jQuery.fn.horizontalBoxSlider = function(boxes) {
	if (typeof boxes == "string") {
		boxes = this.find(boxes);
	}
	return new jQuery.fn.horizontalBoxSlider.Class(this[0], boxes);
};

jQuery.fn.horizontalBoxSlider.Class = function JQueryHorizontalBoxSlider(element, boxes) {
	this.initialize(element, boxes);
};

jQuery.fn.horizontalBoxSlider.Class.prototype = new HorizontalBoxSlider;

/**
 * @param {number} [x] >= 0
 */
jQuery.fn.horizontalBoxSlider.Class.prototype.left = function(x) {
	$(this.element).animate({"scrollLeft": x}, "fast");
};
