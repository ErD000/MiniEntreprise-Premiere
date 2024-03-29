const carouselSlide = document.querySelector('.sliderImage');
const carouselImage = document.querySelectorAll('.sliderImage img');

//buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter
let counter = 1;
const size = carouselImage[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//button listerners
nextBtn.addEventListener('click',()=>{
	if (counter >= carouselImage.length -1) return;
	carouselSlide.style.transition = "transform 0.4s ease-in-out";
	counter++;
	carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'; 
});

prevBtn.addEventListener('click',()=>{
	if (counter <= 0) return;
	carouselSlide.style.transition = "transform 0.4s ease-in-out";
	counter--;
	carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'; 
});

carouselSlide.addEventListener('transitionend', ()=>{
	if (carouselImage[counter].id === 'lastClone'){
		carouselSlide.style.transition = "none";
		counter = carouselImage.length -2;
		carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
	}
	if (carouselImage[counter].id === 'lastClone'){
		carouselSlide.style.transition = "none";
		counter = carouselImage.length -counter;
		carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
	}
});