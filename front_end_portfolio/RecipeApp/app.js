//DATA MANAGEMENT FORM THE API
const url = "https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=f76ab57d&app_key=ed706f291ab8a0122a504d57fdb84755";

//fetch data
const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    const {hits} = data;
    return hits;
}
//display data
const displayDataInit = (recettes,nombre) => {
    const center = document.querySelector(".onePerRecipe");
    const title = document.querySelector(".title");
    const resultMsg = document.querySelector(".result-message-container")
    

    if(!recettes){
        title.textContent = "sorry, no recipes match your search"
        center.innerHTML = null;
        return; 
      }

    else{

    resultMsg.innerHTML=`<h4>${nombre} result(s) found</h4>`
    
    const listeRecettes = recettes.map((item)=>{
    //destructuring : on prend la propriété image et la propriété label de recipe
    const {recipe} = item;
    const {image,label,uri:id,cuisineType} = recipe;
    const id2 = id.split("#").pop();
    return ` 
    <a class="recipe-articles" data-id="${id2}" href="./recipe.html">
    <article data-id="${id2}">
    <div class="image-container" data-id="${id2}">
    <img src="${image}" data-id="${id2}" alt="">  
    </div>
    <div class="title-container" data-id="${id2}">
    <h2 class="title" data-id="${id2}">${label}</h2>
    </div>
    <div class="type-container" data-id="${id2}">
    <p class="cuisine-type">${cuisineType}</p>
    </div>
    </article>
    </a>`
    

    }).join('');

    
    center.innerHTML = listeRecettes;
    
    return center;   
}
}

//Pagination du résultat

const paginate = (data) => {
  const itemsPerPage = 5;
  const numberOfPages = Math.ceil(data.length/itemsPerPage);
  //création d'un array of arrays
  const paginatedRecipes = Array.from({length:numberOfPages},(_,index)=>{
    const start = index * itemsPerPage;
    return data.slice(start,start+itemsPerPage) //[[(0,0+10)],[(10,10+10)]]
  })
  return paginatedRecipes;
}

//fonctions de calcul du nombre de résultats
const transformArray = (data) =>{
  const dataArray = Array.from(data);
  return dataArray;
}
const NbreResult = (dataArray) => {
  let nbreRecettes = dataArray.length;
  return nbreRecettes;
}


//fonction qui display les filtres et leur ajoute un listener.
const displayFilters = (recettes,index) => {
    const filters = document.querySelector(".filter-btns-container");
    const filtersMsg = document.querySelector(".filter-message-container");     

    const elFiltres = recettes.map((item)=>item.recipe.cuisineType);
    const elFiltresStr = elFiltres.map((item)=>item.toString());
    const setFiltres = ['tous les types',...new Set(elFiltresStr)];
    
    filtersMsg.innerHTML = `<h4>Filter by cuisine type</h4>`

    const btnsFiltres = setFiltres.map((item)=>{
      return `<button class="filter-btn">${item}</button>`
    }).join('');
    
    filters.innerHTML = btnsFiltres;
    //1er display
    //STYLISATION DES BOUTONS
    const btns = document.querySelectorAll(".filter-btn");
    for(let i = 0; i < btns.length; i++){
      if(btns[i].textContent==="tous les types"){
        btns[i].classList.add("active");
      }
      else{
        btns[i].classList.add("inactive");
      }
    }
    filters.addEventListener("click",(e)=>{
      if(e.target.classList.contains("filter-btn")){
        const element = e.target;

        //STYLISATION DES BOUTONS
        const btns = document.querySelectorAll(".filter-btn");
        for(let i = 0; i < btns.length; i++){
          if(btns[i]===e.target){
            btns[i].classList.add("active");
            btns[i].classList.remove("inactive");
          }
          else{
            btns[i].classList.add("inactive");
            btns[i].classList.remove("active");
          }
        }

        //GENERATION DES DONNEES
        const value = element.textContent;
        if(value==='tous les types'){
          nbreRecettes = NbreResult(recettes);
          const pages = paginate(recettes);
          Display(pages[index],nbreRecettes);
          boutons(pages,index,nbreRecettes);
        }
        else{
        if(index!=0){index=0};
        newRecipes = recettes.filter((item)=>item.recipe.cuisineType.toString() === value);
        nbreRecettes = NbreResult(newRecipes);
        console.log(nbreRecettes);
        const pages = paginate(newRecipes);
        Display(pages[index],nbreRecettes);
        boutons(pages,index,nbreRecettes);   
        } 
      }
      else{console.log("cliquez sur un des boutons!")}
    })
  }

//génération des boutons de pages et ajout d'un listener dessus.

const boutons = (recettes,index,nbreRecettes) => {
  const btnContainer = document.querySelector(".btn-container");
  const btnGenerator = (recettes) => {
    const boutons = recettes.map((_,index)=>{
      return `<button class="pageBtn" data-index="${index}">${index+1}</button>`
    }).join('');
    btnContainer.innerHTML = boutons;
    const btns = document.querySelectorAll(".pageBtn");
    //initalisation du style des boutons générés
    for(let i = 0; i < btns.length; i++){
      if(btns[i].textContent==="1"){
        btns[i].classList.add("active");
      }
      else{
        btns[i].classList.add("inactive");
      }
    }
}
 btnGenerator(recettes);
  btnContainer.addEventListener("click",(e)=>{
    
    if(e.target.classList.contains("pageBtn")){
      index = parseInt(e.target.dataset.index);
      Display(recettes[index],nbreRecettes); 
      const btns = document.querySelectorAll(".pageBtn");
        for(let i = 0; i < btns.length; i++){
          console.log(e.target);
          if(btns[i]===e.target){
            btns[i].classList.add("active");
            btns[i].classList.remove("inactive");
          }
          else{
            btns[i].classList.add("inactive");
            btns[i].classList.remove("active");
          }
        }
    }
      });
}

//génération de la section et ajout d'un listener dessus.
function Display(recettes,nombre){
  const section = displayDataInit(recettes,nombre);
  section.addEventListener("click", (e)=>{
  const id = e.target.parentElement.dataset.id;
  localStorage.setItem('recipe',id);
    })
  }

//déclaration d'une variable qui servira à la pagination.
let index=0;


//Quand on soumet le form
const formSubmitted = async (url) =>{
  const data = await fetchData(url);
  //calcul du nombre de recettes retournées
  const dataArray = transformArray(data); 
  const nbreRecettes = NbreResult(dataArray); 
  //pagination
  const pages = paginate(data);
  boutons(pages,index,nbreRecettes);
  //display des données et des filtres
  displayFilters(data);
  const section = Display(pages[index],nbreRecettes);
}   




//SUBMIT

const baseURL = 'https://api.edamam.com/api/recipes/v2?type=public&app_id=f76ab57d&app_key=ed706f291ab8a0122a504d57fdb84755&q=';
const formulaire = document.querySelector(".formulaire");
const input = document.querySelector(".input");

formulaire.addEventListener("submit",(e)=>{
    e.preventDefault();
    const valeur = input.value;
    formSubmitted(`${baseURL}${valeur}`);
});



    


