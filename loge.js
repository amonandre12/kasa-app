import { imageCard } from "./data.js";



const container = document.getElementById('logement-details-container');
const paragraph = document.getElementById('paragraph');
const buttonGroup = document.getElementById('btn_Group');


const startContainer = document.getElementById('startContainer');
const myProfil = document.getElementById('myProfil'); 
const imageProfil= document.getElementById('imageProfil'); 
const myProfilGroup = document.getElementById('myProfilGroup'); 

// ........................The logment function.............................// 

  const linkSearch = window.location.search ;
  const urlParams = new URLSearchParams(linkSearch);
  const logementId = urlParams.get('id') ; 
 
  const selectedLogement = imageCard.find(card => card.id === logementId);


 // Fonction pour mettre à jour l'affichage de l'image
   const cosyImage = document.getElementById('cosyImage') ; 
   const pictures = selectedLogement.pictures
   let index = 0 

 function updateCarrousel () {
   cosyImage.innerHTML = "" ; 

   const imgElement  = document.createElement('img');
   imgElement.src = pictures[index]
   imgElement.classList.add('imgContent'); 
   cosyImage.appendChild(imgElement)

  //  The counter 
  const counter = document.createElement('p')
  counter.textContent = `${index + 1} / ${pictures.length}`;
  cosyImage.appendChild(counter) ; 
 }
  
updateCarrousel()
  
const arrowLeft = document.getElementById('arrowLeft')
const arrowRight = document.getElementById('arrowRight')


arrowRight.addEventListener('click', function () {
  index++ ; 
  if(index >= pictures.length) {
    index = 0
  }
 updateCarrousel() ; 
})


arrowLeft.addEventListener('click', function () {
  index-- ; 
  if(index < 0) {
    index = pictures.length - 1
  }
 updateCarrousel() ; 
})


  const titleElement = document.createElement('h1');
  const paragraphe = document.createElement('h2');

  const buttonKeys = [
    "button1" , 
    "button2" , 
    "button3" , 
    "button4" , 
    "button5"
  ]
  
  

  // .....................Title injected .......................//

  titleElement.classList.add('title') 
  titleElement.textContent= selectedLogement.title


  // .................The paragraphe content.....................//

  paragraphe.textContent = selectedLogement.para  
  paragraph.appendChild(titleElement);
  paragraph.appendChild(paragraphe)
  container.appendChild(paragraph)


  
  
for(let i = 0 ; i < buttonKeys.length ; i ++) {
   const currentKey = buttonKeys[i]
   if(selectedLogement[currentKey]) {
    const buttons = document.createElement('button')
    buttons.classList.add('btn')
    buttons.textContent = selectedLogement[currentKey] 

    buttonGroup.appendChild(buttons)
    container.appendChild(buttonGroup)
}} ;
// ..................The Profil and Stars content ..............//

if(startContainer) {
  startContainer.innerHTML = ""
}


// ..........................The Stars content .......................//
// ..............Recuperer la note de l'étoile .......................//

const currentStars = selectedLogement.rating || 0 ; 

const orangStarsSrc = 'images/stars.png'; 
const whiteStarSrc = 'images/starsnull.png';

for (let i = 1 ; i <= 5 ; i ++ ) {
  const starImage = document.createElement('img'); 
        starImage.classList.add('starIcon')

        if(i <= currentStars) {
          starImage.src = orangStarsSrc; 
          starImage.alt = 'Étoile colorée';
        } else {
           starImage.src = whiteStarSrc; 
           starImage.alt = 'Étoile non colorée';
        }

        startContainer.appendChild(starImage)
}

  
// ....................The Members Profils .......................//

const profilImage = document.createElement('img'); 
const profilName = document.createElement('h3') 

profilName.classList.add('nameColor')
profilName.textContent = selectedLogement.name

myProfil.appendChild(profilName)
myProfilGroup.appendChild(profilImage)


profilImage.src = selectedLogement.profilImage; 
profilImage.alt = selectedLogement.altProfil; 
profilImage.classList.add('profilImage'); 

imageProfil.appendChild(profilImage); 
myProfilGroup.appendChild(imageProfil); 


//......................The description content.....................//

const arrowContent1 = document.getElementById('arrowContent1');
const arrow1 = document.querySelector('.arrow1');

const descriptions = document.getElementById('description'); 

 const descriptionParagraph = document.createElement('p');
 const paraWrapper = document.createElement('div');
       paraWrapper.classList.add('wrapper');
       descriptionParagraph.textContent = selectedLogement.description;
       descriptionParagraph.classList.add('description-text' , 'hidden');
  
  
arrowContent1.addEventListener('click' , function(e) {
  e.stopPropagation() ; 
  descriptionParagraph.classList.toggle('hidden'); 
  

  if(descriptionParagraph.classList.contains('hidden')) {
      arrow1.src = "images/3916923.png"
  } else {
      arrow1.src = 'images/up.png'
  }

  if(descriptions) { 
    paraWrapper.appendChild(descriptionParagraph)
    descriptions.appendChild(paraWrapper) 
  }
}); 

//.....................The equipements content.....................//

const arrowContent2 = document.getElementById('arrowContent');
const arrow2 = document.querySelector('.arrow2');
const equipementContainer = document.getElementById('equipement'); 

const equipementKeys = [
  "equipement1" , 
  "equipement2" , 
  "equipement3" , 
  "equipement4" , 
  "equipement5" , 
  "equipement6" , 
  "equipement7" , 
  "equipement8" , 
  "equipement9" , 
  "equipement10"
] ; 


for(let i = 0 ; i < equipementKeys.length ; i ++) {
   const keys = equipementKeys[i]; 

   const paragraphElement = document.createElement('p');
   const equipeWrapper = document.createElement('div');

   if(selectedLogement[keys]) {
    paragraphElement.textContent = selectedLogement[keys]; 
    equipeWrapper.classList.add('equipeWrapper')
    paragraphElement.classList.add('hidden' , 'equipement-item')
    

    if(equipementContainer) {
      equipeWrapper.appendChild(paragraphElement)
      equipementContainer.appendChild(equipeWrapper)
  }

 }; 
}
 

  arrowContent2.addEventListener('click' , (e) => {
    e.preventDefault() ; 
    const items = document.querySelectorAll('.equipement-item') 

      items.forEach(item => {
      item.classList.toggle('hidden') 
    })

    const isHidden = items[0]?.classList.contains('hidden');
    arrow2.src = isHidden ? 'images/3916923.png' : 'images/up.png';
  }
) ;
  
 
