(() => {
	// stub
	console.log('fired!');


	//select elements with javascript
	
	// setting up a variable using the keyword,
	// and using a CSS selector to find the element we want to use.
	
	// let stores the reference to element as a variable(in memory)
	let svgGraphic = document.querySelector("badgeSVG");

	//functions are reusable pieces of code
	//that you can run anytime.
	
	function logMyId() {
		console.log(this.id);
	}

	svgGraphic.addEventListener("click", logMyId);



})();