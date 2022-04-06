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
    desc:"Cette application utilise l'API EDAMAM. Elle consiste en un moteur de recherche de recettes de cuisine basé sur les ingrédients. Elle pagine les résultats et permet de filtrer les recettes par types de cuisine. Une fois que l'on clique sur une recette, des informations plus détaillées sont affichées.",
    link:'/RecipeApp/index.html' 
},
{ id :'capitalQuiz',
img:'/welcome/images/capitalQuiz.png',
title:'Capital Quiz (FR)',
desc : 'Testez vos connaissances sur la géographie du Canada à partir de ce quiz interactif sur les capitales des provinces et territoires',
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
