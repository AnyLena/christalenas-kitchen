const linkClick = document.querySelectorAll(".funcLink");
const recipes = document.querySelector("#iframe");

linkClick.forEach((element) => element.addEventListener("click", changeIframe));

function changeIframe(e) {
  const arr = e.target.classList;

  if (Object.values(arr).includes("greek")) {
    recipes.src = `./recipes/greek/${e.target.id}.html`;
  } else if (Object.values(arr).includes("german")) {
    recipes.src = `./recipes/german/${e.target.id}.html`;
  } else {
    recipes.src = `./home.html`;
  }
}


const btn = document.querySelector('#btn')

const alertMsg = () => alert("Error. Backend not Found. You have to write down the recipe by yourself...")

btn.addEventListener('click', alertMsg)






// Enriques Solution

// const recipes = document.querySelector('#iframe')

// console.log(recipes);

// const handleClick = (recipe) => {
//     recipes.src = `./recipes/${recipe}.html`
// }
