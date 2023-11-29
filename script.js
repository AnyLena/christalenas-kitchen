


// document.querySelector(".mousaka").addEventListener("click",changeIframe);

// function changeIframe() {
//     document.getElementById("recipes").src = "./recipes/greek/mousaka.html"; 
// }



const recipes = document.querySelector('#iframe')

console.log(recipes);

const handleClick = (recipe) => {
    recipes.src = `./recipes/${recipe}.html`
}

