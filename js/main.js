(() => {
	// stub
	console.log('fired!');


	//select elements with javascript

	// setting up a variable using the keyword,
	// and using a CSS selector to find the element we want to use.

	// let stores the reference to element as a variable(in memory)
	let
		mainHeadline = document.querySelector(".main-headline"),
		subtitle1 = document.querySelector(".subtitle1"),
		swapType = document.querySelector(".switch-type"),
		allImages = document.querySelectorAll("#image-container img"),
		objectButton = document.querySelector(".container button");


	//functions are reusable pieces of code
	//that you can run anytime.

	function logMyId() {
		console.log(this.id);
		this.style.opacity = 0.5;
	}

	function swapText(){
		mainHeadline.textContent = "Now you're something else";
		mainHeadline.classList.toggle("selected");

		subtitle1.textContent = "Something elssssssse";
		subtitle1.classList.toggle("selected");
	}

	function logTheSVG() {
		console.log(this.previousElementSibling.id);
	}

//events always down here//


	swapType.addEventListener("click", swapText);

// select and loop through a bunch of items at once -> one to many relationships//
	allImages.forEach(item => {
		item.addEventListener("click", logMyId);
	});

	objectButton.addEventListener("click", logTheSVG);

})();
