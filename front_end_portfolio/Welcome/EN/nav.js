import sublinks from './data.js';

const subMenu = () =>{
    const linkBtn = [...document.querySelectorAll(".link-btn")]; //node list des boutons de liens de la navbar transformée en array.
    const submenu = document.querySelector(".submenu");
    const contactBtn = document.querySelector(".contact-btn");
    const nav = document.querySelector(".nav");
    const submenucontact = document.querySelector(".submenu-contact");

    //SUBMENU : BARRE DU HAUT
//WHEN WE HOVER, WE DISPLAY THE SUBLINKS THAT BELONG THE CATEGORY

linkBtn.forEach(btn => {btn.addEventListener("mouseover", function(e){

    //Dans le CSS, la position de submenu est absolute. Il faut pouvoir modifier cette position en fonction
    //du bouton sur lequel on hover.
    const text=e.currentTarget.textContent;
    const tempBtn = e.currentTarget.getBoundingClientRect(); //va chercher les coordonnées du bouton dans la page.
    //crée deux valeurs de coordonnées pour centre le menu sur le bouton.
    const bottom = tempBtn.bottom - 3; 
    const center = (tempBtn.left + tempBtn.right)/2; 
    
    
    const tempPage = sublinks.find(({page})=>page===text) //tu cherches dans l'objet la première valeur pour laquelle page = le texte du bouton.
    if(tempPage){ //when you find it
        const {page,links} = tempPage;
        submenu.classList.add("show");
        submenu.style.left = `${center}px`;
        submenu.style.top = `${bottom}px`;
    
        //OPTIONAL : COLUMN LAYOUT
        let columns = "col-2";
        if(links.length===3){
            columns = "col-3";
        }
        if(links.length>3){
            columns = "col-4";
        }
    
        submenu.innerHTML = `
        <section>
        <h4>${page}</h4>
        <div class="submenu-center ${columns}">
        ${links.map((link)=>{return `<a href="${link.url}"><i class="${link.icon}"></i>${link.label}</a>`;}).join("")}
        </div>
        </section>`;
    }
    })
        
    });
    
    contactBtn.addEventListener("mouseover",()=>{
        contactBtn.textContent="Click here to contact me!"
    })

    contactBtn.addEventListener("mouseleave", ()=>{
        contactBtn.textContent="Contact me"
    })
    
    contactBtn.addEventListener('click',(e)=>{
        const tempBtn = e.currentTarget.getBoundingClientRect(); //va chercher les coordonnées du bouton dans la page.
    //crée deux valeurs de coordonnées pour centre le menu sur le bouton.
        const bottom = tempBtn.bottom; 
        const center = (tempBtn.left + tempBtn.right)/2; 
        submenucontact.classList.add("show");
        submenucontact.style.left = `${center}px`;
        submenucontact.style.top = `${bottom}px`;
        submenucontact.innerHTML = `<section>
        <h4>Telephone</h4>
        <div class="submenu-contact-center">
        <i class="fas fa-phone"></i><p>+1-437-989-25-10</p>
        </div>
        <h4>E-mail</h4>
        <div class="submenu-contact-center">
        <i class="fas fa-envelope"></i><a href="mailto:guillaume.detalle@gmail.com">guillaume.detalle@gmail.com</a>
        </div>
        </section>`
    
    })
    nav.addEventListener("mouseover", function(e){
        if(!e.target.classList.contains('link-btn')){
            submenu.classList.remove("show");
            submenucontact.classList.remove("show");
        }
        })
}

export default subMenu;