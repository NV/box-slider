with (frames[0]) {

	test("next", function() {
		turner_painting.scrollLeft = 0;
		slider.next();
		equals(turner_painting.scrollLeft, pictures[1].offsetLeft);

		slider.next();
		equals(turner_painting.scrollLeft, pictures[2].offsetLeft);

		slider.next();
		equals(turner_painting.scrollLeft, pictures[2].offsetLeft);

		turner_painting.scrollLeft = 20;
		slider.next();
		equals(turner_painting.scrollLeft, pictures[1].offsetLeft);

		turner_painting.scrollLeft = 395;
		slider.next();
		equals(turner_painting.scrollLeft, pictures[2].offsetLeft);
	});


	test("previous", function() {
		turner_painting.scrollLeft = 1000;
		slider.previous();
		equals(turner_painting.scrollLeft, pictures[1].offsetLeft);

		slider.previous();
		equals(turner_painting.scrollLeft, pictures[0].offsetLeft);

		slider.previous();
		equals(turner_painting.scrollLeft, pictures[0].offsetLeft);

		turner_painting.scrollLeft = 20;
		slider.previous();
		equals(turner_painting.scrollLeft, pictures[0].offsetLeft);

		turner_painting.scrollLeft = 395;
		slider.previous();
		equals(turner_painting.scrollLeft, pictures[1].offsetLeft);
	});


	test("left", function() {
		slider.left(100);
		equals(slider.element.scrollLeft, 100);
	});


	test("scrollTo", function() {
		slider.scrollTo(pictures[0]);
		equals(turner_painting.scrollLeft, pictures[0].offsetLeft);

		slider.scrollTo(pictures[1]);
		equals(turner_painting.scrollLeft, pictures[1].offsetLeft);

		slider.scrollTo(pictures[2]);
		equals(turner_painting.scrollLeft, pictures[2].offsetLeft);
	});


	test("currentIndex", function(){
		turner_painting.scrollLeft = 0;
		equals(slider.currentIndex(), 0);

		turner_painting.scrollLeft = 200;
		equals(slider.currentIndex(), 0);

		turner_painting.scrollLeft = 400;
		equals(slider.currentIndex(), 1);

		turner_painting.scrollLeft = 650;
		equals(slider.currentIndex(), 2);
	});


	test("scrollToStart", function() {
		turner_painting.scrollLeft = 500;
		slider.scrollToStart();
		equals(turner_painting.scrollLeft, 0);
	});


	test("scrollToEnd", function() {
		slider.scrollToEnd();
		equals(turner_painting.scrollLeft, turner_painting.scrollWidth - turner_painting.offsetWidth);
	});

}
