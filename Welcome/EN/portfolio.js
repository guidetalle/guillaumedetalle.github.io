import sublinks from './data.js';
import subMenu from './nav.js';
import sideBar from './sidebar.js';

//NAV
subMenu();
//SIDEBAR
sideBar();

const projects = [
{   id:'recipeApp',
    img:'/welcome/images/recipeApp.jpg',
    title:'Recipe App (EN)',
    desc:"This application uses the EDAMAM API. It consists in a search engine of recipes based on the ingredients they contain. Results are pagninated and you can filter by cuisine type. Once the user clicks on a recipe, more detailed information is shown.",
    link:'/RecipeApp/index.html' 
},
{ id :'capitalQuiz',
img:'/welcome/images/capitalQuiz.png',
title:'Capital Quiz (FR)',
desc : 'Test your knowledge of the geography of Canada by playing this interactive quiz about the capitals of the provinces and territories.',
link:'/CapitalQuiz/welcome.html'}];

const catalog = document.querySelector(".catalog-container");

const articles = projects.map((project)=>{
    const {img,title,desc,link}=project;
    return `<article class="project">
    <a href="${link}">
    <img class="proj-img" src=${img}>
    </a>
    <div class="description">
    <h4>${title}</h4><p>${desc}</p>
    </div>
    </article>`
});
catalog.innerHTML = articles;