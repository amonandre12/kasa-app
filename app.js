import { imageCard } from "./data.js"

const gallery = document.getElementById('gallery')

 

// The container fucntion 
function afficheImages() {
    imageCard.map(card => {

          // The create link content 
        const linkDirection = document.createElement('a');   

        linkDirection.href = `loge.html?id=${card.id}`; 
        linkDirection.classList.add('product-link');
    
        
        // The creation the title 
         const title = document.createElement('h2');
         title.textContent = card.title;
         title.classList.add('img_title')
         
        const img = document.createElement('img');
        img.src = card.pictures[0]
        img.alt = "Les images de commodations ";
        img.classList.add('card-image');
    

        // Add the create element
        linkDirection.appendChild(img)
        linkDirection.appendChild(title)
       
        // The container 
        gallery.appendChild(linkDirection);
    })
}
afficheImages(); 