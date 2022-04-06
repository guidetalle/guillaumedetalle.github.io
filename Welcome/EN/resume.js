import sublinks from './data.js';
import subMenu from './nav.js';
import sideBar from './sidebar.js';

//NAV
subMenu();
//SIDEBAR
sideBar();

//CV
const data = [
    'guillaume.detalle@gmail.com', 'Belgian, born OCT 25, 1989 in Liège (Belgium)', '2284 Rue Ontario E, MONTREAL, QC, H2K1V8', '437-989-2510'
];

const btnContainer = document.querySelector(".values-list");
const dynamic = document.querySelector(".dynamic");
const btns = document.querySelectorAll(".icon");

const initBtns = (btn) => {
    for(let i=0; i<4; i++){
        btn[i].classList.remove('activeBtn');
    }  
}

btnContainer.addEventListener('click',(e)=>{
initBtns(btns);
if(e.target.classList.contains('icon') && e.target.classList.contains('email')){
  dynamic.innerHTML = `<p class="dyn"><a href="mailto:guillaume.detalle@gmail.com">${data[0]}</a></p>`
  e.target.classList.add('activeBtn');
}
else if (e.target.classList.contains('icon') && e.target.classList.contains('pob')){
  
  dynamic.innerHTML = `<p class="dyn">${data[1]}</p>`
  e.target.classList.add('activeBtn');
  }
else if (e.target.classList.contains('icon') && e.target.classList.contains('adress')){
  dynamic.innerHTML = `<p class="dyn">${data[2]}</p>`
  e.target.classList.add('activeBtn');
  }
else if (e.target.classList.contains('icon') && e.target.classList.contains('tel')){
  dynamic.innerHTML = `<p class="dyn">${data[3]}</p>`
  e.target.classList.add('activeBtn');
  }
});