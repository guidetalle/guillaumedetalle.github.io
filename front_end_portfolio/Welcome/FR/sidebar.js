import sublinks from './data.js';

const sideBar = () => {
    const toggleBtn = document.querySelector(".toggle-btn"); //bouton toggle
    const closeBtn = document.querySelector(".close-btn"); //bouton close
    const sidebarWrapper = document.querySelector(".sidebar-wrapper"); //sidebar qui apparait
    const sidebar = document.querySelector(".sidebar-links"); //liens de la sidebar
    
    //HIDE THE SIDEBAR IF CLICK ON X
    //SHOW THE SIDEBAR IF CLICK ON TOGGLE MENU
    toggleBtn.addEventListener('click',()=>{
        sidebarWrapper.classList.add("show");
    })
    
    closeBtn.addEventListener('click',()=>{
        sidebarWrapper.classList.remove("show"); 
    })
    
    //SET SIDE BAR
    sidebar.innerHTML = sublinks.map((item)=>{
     const {links, page} = item;
     return `<article>
     <h4>${page}</h4>
     <div class="sidebar-sublinks">
     ${links.map((link)=>{
     return `<a href="${link.url}">
     <i class="${link.icon}"></i>${link.label}
     </a>`
     }).join("")}
     </div>
     </article>`
    }).join('');
    }
    sideBar();

export default sideBar;