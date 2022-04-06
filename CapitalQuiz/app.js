//Données du quiz 
const quizData = [
    {Q:"Quelle est la capitale du Manitoba ?",
     R1:"Winnipeg",
     R2:"Thunder Bay",
     C:"Winnipeg"
    },
     {Q:"Quelle est la capitale du Québec ?",
     R1:"Montréal",
     R2:"Québec",
     C:"Québec"},
     {Q:"Quelle est la capitale de l'Ontario ?",
     R1:"Toronto",
     R2:"Ottawa",
     C:"Toronto"},
     {Q:"Quelle est la capitale de l'Alberta ?",
     R1:"Edmonton",
     R2:"Calgary",
     C:"Edmonton"},
     {Q:"Quelle est la capitale de la Saskatchewan ?",
     R1:"Saskatoon",
     R2:"Regina",
     C:"Regina"},
     {Q:"Quelle est la capitale de la Colombie Britannique ?",
     R1:"Victoria",
     R2:"Vancouver",
     C:"Victoria"},
     {Q:"Quelle est la capitale de Terre Neuve et Labrador ?",
     R1:"Saint-Johns",
     R2:"Gander",
     C:"Saint-Johns"},
     {Q:"Quelle est la capitale de l'île du Prince Edouard ?",
     R1:"Charlottetown",
     R2:"Cavendish",
     C:"Charlottetown"},
     {Q:"Quelle est la capitale de la Nouvelle Ecosse ?",
     R1:"Sydney",
     R2:"Halifax",
     C:"Halifax"},
     {Q:"Quelle est la capitale du Nouveau Brunswick ?",
     R1:"Moncton",
     R2:"Fredericton",
     C:"Fredericton"},
     {Q:"Quelle est la capitale du Yukon ?",
     R1:"Dawson City",
     R2:"Whitehorse",
     C:"Whitehorse"},
     {Q:"Quelle est la capitale des Territoires du Nord-Ouest ?",
     R1:"Inuvik",
     R2:"Yellowknife",
     C:"Yellowknife"},
     {Q:"Quelle est la capitale du Nunavut ?",
     R1:"Iqualuit",
     R2:"Alert",
     C:"Iqualuit"}
]
const images = ['./images/MB.png','./images/QC.png','./images/ON.png','./images/AB.png','./images/SK.png','./images/BC.png','./images/NF.png','./images/PEI.png','./images/NS.png','./images/NB.png','./images/YK.png','./images/NWT.png','./images/NV.png']

//sélection des éléments où insérer la dynamique
const questionContainer = document.querySelector(".question-container");
const btnContainer = document.querySelector(".btn-container");
const scoreContainer = document.querySelector(".score-container");
const msgContainer = document.querySelector(".message-container");
const newPartieContainer = document.querySelector(".newPartie-container");
const provinceImageContainer = document.querySelector(".province-image-container");

//déclaration de l'index des questions
let index = 0;
let score = 0;

//génération des questions
const generateQuestions = () => {
 
    const questions = quizData.map((item)=>{
        const {Q}=item;
        return Q;
    });

    questionContainer.innerHTML = `<h4>${questions[index]}<h4>`

}

//génération des images
const generateImages = () => {
    const provImage = images.map((item)=>{
        return `<img class="province-img" src="${item}">`;
    })
    provinceImageContainer.innerHTML=provImage[index];
}

//génération des boutons
const generateButtons = () => {

    const btns = quizData.map((item)=>{
        const {R1,R2} = item;
        return `<button class="answer-btn">${R1}</button><button class="answer-btn">${R2}</button>`
    })
    btnContainer.innerHTML = btns[index];
    msgContainer.innerHTML="";
}

btnContainer.addEventListener("click",(e)=>{
    if(e.target.classList.contains("answer-btn")){
       const value = e.target.textContent;
       const {C} = quizData[index];
       if(value === C){
           const message = `<p>Bonne réponse !</p>`
           msgContainer.innerHTML = message;
           e.target.classList.remove("answer-btn");
           e.target.classList.add("good");
           score++;
       }
       else{
        const message = `<p>Mauvaise réponse !</p>`
        msgContainer.innerHTML = message;
        e.target.classList.remove("answer-btn");
        e.target.classList.add("bad");
        if(e.target.nextSibling){
            e.target.nextSibling.classList.remove("answer-btn");
            e.target.nextSibling.classList.add("good")
        }
        else{
            e.target.previousSibling.classList.remove("answer-btn");
            e.target.previousSibling.classList.add("good")
        }
       }
       index++;
    generateScore();
    
    if(index === quizData.length){
        if(score<7){
        const fin = `<p>Jeu terminé, vous avez ${score} points. Vous avez encore des progrès à faire</p>`;
        scoreContainer.innerHTML = fin;    
        }
        if(7<score<10){
        const fin = `<p>Jeu terminé, vous avez ${score} points. Vous vous débrouillez plutôt bien.</p>`;
        scoreContainer.innerHTML = fin;     
        }
        if(10<score<13){
            const fin = `<p>Jeu terminé, vous avez ${score} points. C'est excellent.</p>`;
            scoreContainer.innerHTML = fin;     
        }
        if(score===13){
            const fin = `<p>Jeu terminé, vous avez ${score} points. Féliciations, vous êtes incollable.</p>`;
            scoreContainer.innerHTML = fin;     
        }

        const newPartie = `<p><a class="newPartie" href="./index.html">Nouvelle partie</a></p>`;
        
        newPartieContainer.innerHTML = newPartie;
    }
    else{
        setTimeout(generateQuestions,1500);
        setTimeout(generateImages,1500);
        setTimeout(generateButtons,1500);}
    }
})
//génération du score

const generateScore = () => {
    scoreContainer.innerHTML=`<p>Votre score actuel est de : ${score} / 13</p>`;
}

window.addEventListener("DOMContentLoaded",()=>{
    generateQuestions();
    generateImages();
    generateButtons();
    generateScore();
})


