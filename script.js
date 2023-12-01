const linkClick = document.querySelectorAll(".funcLink");
const recipes = document.querySelector("#iframe");

linkClick.forEach((element) => element.addEventListener("click", changeIframe));

function changeIframe(e) {
  const arr = e.target.classList;
  console.log(arr);

  if (Object.values(arr).includes("greek")) {
    recipes.src = `./recipes/greek/${e.target.id}.html`;
  } else if (Object.values(arr).includes("german")) {
    recipes.src = `./recipes/german/${e.target.id}.html`;
  } else {
    recipes.src = `./home.html`;
  }
}

// Enriques Solution

// const recipes = document.querySelector('#iframe')

// console.log(recipes);

// const handleClick = (recipe) => {
//     recipes.src = `./recipes/${recipe}.html`
// }
window.onload = function () { 
	let slides = 
		document.getElementsByClassName('carousel-item'); 

	function addActive(slide) { 
		slide.classList.add('active'); 
	} 

	function removeActive(slide) { 
		slide.classList.remove('active'); 
	} 

	addActive(slides[0]); 
	setInterval(function () { 
		for (let i = 0; i < slides.length; i++) { 
			if (i + 1 == slides.length) { 
				addActive(slides[0]); 
				setTimeout(removeActive, 350, slides[i]); 
				break; 
			} 
			if (slides[i].classList.contains('active')) { 
				setTimeout(removeActive, 350, slides[i]); 
				addActive(slides[i + 1]); 
				break; 
			} 
		} 
	}, 1500); 
};
