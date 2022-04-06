//this file contains the code to show the details of the recipe on which the user clicked.

const id = localStorage.getItem('recipe');
console.log(id);
const url =  `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=f76ab57d&app_key=ed706f291ab8a0122a504d57fdb84755`

const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
}

const displayData = (recette) => {
    const {recipe} = recette;
    const {label, image, ingredientLines, calories, source, url:sourceURL} = recipe;
    const innerHTML = 
    `<img src="${image}" class="recipe-img" alt="">
    <article class="recipe-info">
        <h2 class="title">${label}</h2>
        <p class="descr">
           <p class="snd-level">This recipe contains :  ${Math.round(calories)} calories</p>
           <h4 class="ingredient-label">Ingredients:</h4>
           <ul class="ingredients">
           ${ingredientLines.map((item)=>{
               return `<li>${item}</li>`
           }).join('')}
           </ul>
           <p class="snd-level">Find the full recipe at : </p>
           <a class="recipe-link" href="${sourceURL}">${source}</a>
           <a href="index.html" class="backtoSearch">Back to recipes search engine</a>
        </p>
    </article>`
    
    const container = document.querySelector(".single-recipe");
    container.innerHTML = innerHTML;
}


const init = async (url) => {
    const data = await fetchData(url);
    const html = await displayData(data);
}

init(url);