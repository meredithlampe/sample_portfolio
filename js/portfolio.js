document.addEventListener('DOMContentLoaded', function() {
	let lightSwitch = document.querySelector('#switch'),
		 shadowSmall = document.querySelector('#shadow'),
		 shadowLarge = document.querySelector('#shadow-large');
	
	let timeline = new TimelineMax();
	timeline.to(lightSwitch, 0.2, {y: '+=35', ease: Power1.easeInOut}, 0);
	timeline.to(shadowSmall, 0.2, {y: '+=3', ease: Power1.easeInOut}, 0);
	timeline.to(shadowLarge, 0.2, {y: '-=3', ease: Power1.easeInOut}, 0);
	
	timeline.reverse();
	
	lightSwitch.addEventListener('click', function() {
		// document.querySelector(".card").classList.toggle('dark');
		var body = document.querySelector("body");
		for (var i = 0; i < body.children.length; i++) {
			var child = body.children[i];
			child.classList.toggle('dark');
		}

		// toggle class on some other nested elements
		var title = document.querySelector(".portfoliotitle").classList.toggle('dark');

		// swap out the photo
		var pic = document.querySelector(".picofme");
		if (pic.getAttribute("src") != "media/IMG_3530.jpg") {
			// transition to colorful mode
			pic.setAttribute("src", "media/IMG_3530.jpg");
		} else {
			// transition to monochrome
			pic.setAttribute("src", "media/IMG_0897.jpg");

		}
		console.log("card class list: " + $(".card").classList);				
		// $(".card")[0].addClass("dark");
		timeline.reversed(!timeline.reversed());
	});
});