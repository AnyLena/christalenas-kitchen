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
