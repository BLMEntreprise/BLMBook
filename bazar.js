// Charger le JSON
const canapes = [
{
  "ref":"1",
  "denomination": "Epingle à linge plastique",
  "image": "article-01-3.JPG",
  "caracteristique": ["Conditionnement: par 24 x 144 pièces par colis."],
  "cartons": [],
  "poids": [],
  "options": [],
  "images_options": ["article-01-2.JPG","article-01-1.JPG"]
},
{
  "ref":"2",
  "denomination": "Epingle à linge plastique",
  "image": "article-02.JPG",
  "caracteristique": ["Conditionnement: par 24 x 144 pièces par colis."],
  "cartons": [],
  "poids": [],
  "options": [],
  "images_options": ["article-02-1.JPG", "article-02-2.JPG"]
},
{
  "ref":"3",
  "denomination": "Epingle à linge plastique",
  "image": "article-03-1.JPG",
  "caracteristique": ["Conditionnement: par 24 x 144 pièces par colis."],
  "cartons": [],
  "poids": [],
  "options": [],
  "images_options": ["article-03-3.JPG", "article-02-2.JPG"]
},
{
  "ref":"5",
  "denomination": "Epingle à linge plastique",
  "image": "article-05-2.JPG",
  "caracteristique": ["Conditionnement: par 12 x 144 pièces par colis."],
  "cartons": [],
  "poids": [],
  "options": [],
  "images_options": ["article-05-1.JPG", "article-05-3.JPG"]
},
{
  "ref":"4",
  "denomination": "Epingle à linge en bois",
  "image": "article-04-2.JPG",
  "caracteristique": ["Conditionnement:par 24 x 144 pièces par colis."],
  "cartons": [],
  "poids": [],
  "options": [],
  "images_options": ["article-04-3.JPG", "article-04-1.JPG"]
},
{
  "ref":"11",
  "denomination": "Corde à linge",
  "image": "article-12-1.JPG",
  "caracteristique": ["Conditionnement: par 3 x 240 pièces par colis."],
  "cartons": [],
  "poids": [],
  "options": [],
      "images_options": ["article-12-2.JPG","article-12-3.JPG"]
},
{
  "ref":"13",
  "denomination": "Tête de balais standard",
  "image": "article-14.JPG",
  "caracteristique": ["Longueur 22cm. Hauteur 7,5cm. Conditionnement: 100 pièces par colis."],
  "cartons": [],
  "poids": [],
  "options": [],
        "images_options": ["article-14-2.JPG","article-14-1.JPG"]
},
{
  "ref":"16",
  "denomination": "Tête de balais",
  "image": "article-17.JPG",
  "caracteristique": ["Longueur 38cm. Hauteur 9cm. Conditionnement: 50 pièces par colis."],
  "cartons": [],
  "poids": [],
  "options": [],
  "images_options": ["article-17-2.JPG","article-17-1.JPG"]
},
{
  "ref":"9",
  "denomination": "Brosse à tapis",
  "image": "article-10.JPG",
  "caracteristique": ["Poil dur. 18cm de longueur. Conditionnement: 240 pièces par colis."],
  "cartons": [],
  "poids": [],
  "options": [],
  "images_options": ["article-10-1.JPG","article-10-2.JPG"]
},
{
  "ref":"7",
  "denomination": "Moppe espagnole",
  "image": "article-8.JPG",
  "caracteristique": ["Longueur du poil: 35cm. Conditionnement: colis de 100 pièces."],
  "cartons": [],
  "poids": [],
  "options": [],
  "images_options": ["article-8-1.JPG", "article-8-2.JPG"]
},
{
  "ref":"17",
  "denomination": "Manche à balais bois vernis",
  "image": "article-18-1.JPG",
  "caracteristique": ["Diamètre 22,1mm. Longueur du manche: 120cm. Conditionnement: 50 pièces par colis."],
  "cartons": [],
  "poids": [],
  "options": ["vernis / accroche"],
  "images_options": ["article-18-2.JPG","article-18.JPG","article-18-4.JPG"]
},
{
  "ref":"14",
  "denomination": "Pelle + balayette",
  "image": "article-15.JPG",
  "caracteristique": ["Matière plastique. Conditionnement: 50 pièces par colis."],
  "cartons": [],
  "poids": [],
  "options": [],
  "images_options": ["article-15-2.JPG","article-15-1.JPG"]
},
{
  "ref":"19",
  "denomination": "Balais microfibre ",
  "image": "article-20.JPG",
  "caracteristique": ["Manche inox. Hauteur 110cm (réglable). Conditionnement: 60 pièces par colis."],
  "cartons": [],
  "poids": [],
  "options": [],
    "images_options": ["article-20-2.JPG","article-20-3.JPG","article-20-4.JPG"]
},
{
  "ref":"18",
  "denomination": "Moppe microfibre",
  "image": "article-19.JPG",
  "caracteristique": ["Microfibre 90 grammes. Longueur: 40cm. Largeur: 12cm. Conditionnement: 200 pièces par colis."],
  "cartons": [],
  "poids": [],
  "options": [],
    "images_options": ["article-19-2.JPG","article-19-3.JPG","article-19-4.JPG", "article-19-5.JPG"]
},
{
  "ref":"10",
  "denomination": "Brosse wc",
  "image": "article-11.JPG",
  "caracteristique": ["Longueur 50cm. Conditionnement: 80 pièces par colis."],
  "cartons": [],
  "poids": [],
  "options": [""],
  "images_options": ["article-11-1.JPG","article-11-2.JPG"]
},
{
  "ref":"12",
  "denomination": "Boule en inox avec support",
  "image": "article-13.JPG",
  "caracteristique": ["Conditionnement: par 6 x 120 pièces par colis"],
  "cartons": [],
  "poids": [],
  "options": [],
  "images_options": ["article-13-1.JPG"]
},
{
  "ref":"6",
  "denomination": "Contenant liquide à 3 becs",
  "image": "article-07.JPG",
  "caracteristique": ["Volume 650ml. Conditionnement: 200 pièces par colis."],
  "cartons": [],
  "poids": [],
  "options": [],
  "images_options": ["article-07-1.JPG", "article-07-2.JPG"]
},
{
  "ref":"8",
  "denomination": "Boite coton tige",
  "image": "article-9.JPG",
  "caracteristique": ["Conditionnement: par 12 x 240 pièces par colis"],
  "cartons": [],
  "poids": [],
  "options": [],
  "images_options": ["article-9-1.JPG","article-9-2.JPG"]
},
{
  "ref":"15",
  "denomination": "Chariot de course à roulette",
  "image": "article-16.JPG",
  "caracteristique": ["Hauteur: 95cm. Largeur: 20cm. Conditionnement: 10 pièces par colis."],
  "cartons": [],
  "poids": [],
  "options": []
},
{
  "ref":"21",
  "denomination": "Sac cabas multi-usage",
  "image": "article-21-2.JPG",
  "caracteristique": ["Sac de transport et rangement. Conditionnement: 120 pièces par colis. 5 tailles disponibles: 50 x 35 x 20 - 60 x 45 x 20 - 70 x 55 x 23 - 80 x 60 x 26 - 90 x 60 x 30"],
  "cartons": [],
  "poids": [],
  "options": [],
    "images_options": ["article-21-1.JPG"]
}
]

generateCatalogue(canapes);

function generateCatalogue(canapes) {
  const catalogue = document.getElementById('catalogue');

  canapes.forEach(canape => {
    const card = document.createElement('div');
    card.className = 'card';

const imagesContainer = document.createElement('div');
imagesContainer.className = 'images-container';

let allImages = [];

// Ajouter l'image principale
if (canape.image) {
    allImages.push(canape.image);
}

// Ajouter images supplémentaires
if (canape.images_options && Array.isArray(canape.images_options)) {
    allImages = allImages.concat(canape.images_options);
}

// Cas 1 : une seule image → comportement normal
if (allImages.length === 1) {
    const img = document.createElement('img');
    img.src = `bazar/${allImages[0]}`;
    img.alt = canape.denomination;
    img.className = 'small-img';
    img.onclick = () => showModal(img.src);
    imagesContainer.appendChild(img);

// Cas 2+ : plusieurs images → grille compacte
} else {
    const grid = document.createElement('div');
    grid.className = 'images-grid';

    allImages.forEach(src => {
        const img = document.createElement('img');
        img.src = `bazar/${src}`;
        img.alt = canape.denomination;
        img.onclick = () => showModal(img.src);

        grid.appendChild(img);
    });

    imagesContainer.appendChild(grid);
}

card.appendChild(imagesContainer);


    // Référence
    const title = document.createElement('h2');
    title.textContent = canape.denomination;
    card.appendChild(title);

            // Options
    // if (canape.options) {
    //   const options = document.createElement('p');
    //   options.innerHTML = `<strong>Options:</strong> ${canape.options.join(' / ')}`;
    //   card.appendChild(options);
    // }

    // caracteristique
    const caracteristique = document.createElement('p');
    caracteristique.innerHTML = `<strong>Caractéristiques :</strong> ${canape.caracteristique.join(' / ')}`;
    card.appendChild(caracteristique);

    // // Cartons
    // const cartons = document.createElement('p');
    // cartons.innerHTML = `<strong>Cartons (cm):</strong> ${canape.cartons.join(' / ')}`;
    // card.appendChild(cartons);

    // // Poids
    // const poids = document.createElement('p');
    // poids.innerHTML = `<strong>Poids (kg):</strong> ${canape.poids.join(' / ')}`;
    // card.appendChild(poids);



    catalogue.appendChild(card);
  });
}

// Modal
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeModalBtn = document.getElementById('close-modal');

function showModal(src) {
  modal.style.display = 'flex';
  modalImg.src = src;
}

closeModalBtn.onclick = () => modal.style.display = 'none';
window.onclick = e => { if(e.target === modal) modal.style.display='none'; }
