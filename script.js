const sliderNear = document.getElementById('slider_near');
const sliderFurther = document.getElementById('slider_further');
const nav = document.querySelector('.slider-nav');
const prev = nav.querySelector('[data-action="prev"]');
const next = nav.querySelector('[data-action="next"]');
const imagesList = ['img1.jpg', 'img2.jpg', 'img3.jpg'];

sliderNear.addEventListener('animationend', function() {
	sliderNear.classList.remove("tada");
});

sliderFurther.addEventListener('animationend', function() {
	sliderFurther.classList.remove("tada");
});

let numberSlideNear = 0;

function nextClick() {

	sliderNear.classList.add("tada");
	sliderFurther.classList.add("tada");


	if (numberSlideNear < imagesList.length-1) {
	numberSlideNear++;
	} else {
	numberSlideNear = 0;
	};


	sliderNear.style.backgroundImage = `url(img/${imagesList[numberSlideNear]})`;

	if (1 <= numberSlideNear) {
	sliderFurther.style.backgroundImage = `url(img/${imagesList[numberSlideNear-1]})`;
	} else {
	sliderFurther.style.backgroundImage = `url(img/${imagesList[2]})`;
	};

}

function prevClick() {

	sliderNear.classList.add("tada");
	sliderFurther.classList.add("tada");

	if (numberSlideNear > 0) {
	numberSlideNear--;
	} else {
	numberSlideNear = 2;
	};

	sliderNear.style.backgroundImage = `url(img/${imagesList[numberSlideNear]})`;

	if (numberSlideNear < imagesList.length-1) {
	sliderFurther.style.backgroundImage = `url(img/${imagesList[numberSlideNear+1]})`;
	} else {
	sliderFurther.style.backgroundImage = `url(img/${imagesList[0]})`;
	};

}

next.addEventListener('click', nextClick);
prev.addEventListener('click', prevClick)
