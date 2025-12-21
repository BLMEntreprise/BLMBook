// Charger le JSON
const canapes = [
{
  "ref":"1",
  "denomination": "Epingle à linge plastique",
  "image": "article-01-3.jpg",
  "caracteristique": ["Conditionnement: 24 pcs"],
  "cartons": [],
  "poids": [],
  "options": [],
  "images_options": ["article-01-2.jpg","article-01-1.jpg"]
},
{
  "ref":"2",
  "denomination": "Epingle à linge plastique",
  "image": "article-02.jpg",
  "caracteristique": ["Conditionnement: 24 pcs"],
  "cartons": [],
  "poids": [],
  "options": [],
  "images_options": ["article-02-1.jpg", "article-02-2.jpg"]
},
{
  "ref":"3",
  "denomination": "Epingle à linge plastique",
  "image": "article-03-1.jpg",
  "caracteristique": ["Conditionnement: 24 pcs"],
  "cartons": [],
  "poids": [],
  "options": [],
  "images_options": ["article-03-3.jpg", "article-02-2.jpg"]
},
{
  "ref":"5",
  "denomination": "Epingle à linge plastique",
  "image": "article-05-2.jpg",
  "caracteristique": ["Conditionnement: 12 pcs"],
  "cartons": [],
  "poids": [],
  "options": [],
  "images_options": ["article-05-1.jpg", "article-05-3.jpg"]
},
{
  "ref":"4",
  "denomination": "Epingle à linge en bois",
  "image": "article-04-2.jpg",
  "caracteristique": ["Conditionnement: 24 pcs"],
  "cartons": [],
  "poids": [],
  "options": [],
  "images_options": ["article-04-3.jpg", "article-04-1.jpg"]
},
{
  "ref":"11",
  "denomination": "Corde",
  "image": "article-12-1.jpg",
  "caracteristique": ["Conditionnement: 3 pcs"],
  "cartons": [],
  "poids": [],
  "options": [],
      "images_options": ["article-12-2.jpg","article-12-3.jpg"]
},
{
  "ref":"13",
  "denomination": "Tête de balais standard",
  "image": "article-14.jpg",
  "caracteristique": ["Longueur 22cm/ Hauteur 7,5cm"],
  "cartons": [],
  "poids": [],
  "options": [],
        "images_options": ["article-14-2.jpg","article-14-1.jpg"]
},
{
  "ref":"16",
  "denomination": "Tête de balais",
  "image": "article-17.jpg",
  "caracteristique": ["Longueur 38cm / Hauteur 9cm"],
  "cartons": [],
  "poids": [],
  "options": [],
  "images_options": ["article-17-2.jpg","article-17-1.jpg"]
},
{
  "ref":"9",
  "denomination": "Brosse à tapis",
  "image": "article-10.jpg",
  "caracteristique": ["Poil dur 18cm de longueur"],
  "cartons": [],
  "poids": [],
  "options": [],
  "images_options": ["article-10-1.jpg","article-10-2.jpg"]
},
{
  "ref":"7",
  "denomination": "Moppe espagnole",
  "image": "article-8.jpg",
  "caracteristique": [""],
  "cartons": [],
  "poids": [],
  "options": [],
  "images_options": ["article-8-1.jpg", "article-8-2.jpg"]
},
{
  "ref":"17",
  "denomination": "Manche à balais bois vernis",
  "image": "article-18-1.jpg",
  "caracteristique": ["Diamètre 22,1 mm"],
  "cartons": [],
  "poids": [],
  "options": [],
  "images_options": ["article-18-2.jpg","article-18-3.jpg","article-18-4.jpg"]
},
{
  "ref":"14",
  "denomination": "Pelle + balayette plastique",
  "image": "article-15.jpg",
  "caracteristique": [""],
  "cartons": [],
  "poids": [],
  "options": [],
  "images_options": ["article-15-2.jpg","article-15-1.jpg"]
},
{
  "ref":"19",
  "denomination": "Balais microfibre manche inox",
  "image": "article-20.jpg",
  "caracteristique": ["Hauteur réglable"],
  "cartons": [],
  "poids": [],
  "options": [],
    "images_options": ["article-20-2.jpg","article-20-3.jpg","article-20-4.jpg"]
},
{
  "ref":"18",
  "denomination": "Moppe microfibre",
  "image": "article-19.jpg",
  "caracteristique": ["90 grammes"],
  "cartons": [],
  "poids": [],
  "options": [],
    "images_options": ["article-19-2.jpg","article-19-3.jpg","article-19-4.jpg", "article-19-5.jpg"]
},
{
  "ref":"10",
  "denomination": "Brosse wc",
  "image": "article-11.jpg",
  "caracteristique": [""],
  "cartons": [],
  "poids": [],
  "options": ["longueur 50cm"],
  "images_options": ["article-11-1.jpg","article-11-2.jpg"]
},
{
  "ref":"12",
  "denomination": "Boule en inox avec support",
  "image": "article-13.jpg",
  "caracteristique": ["Conditionnement: 6 pcs"],
  "cartons": [],
  "poids": [],
  "options": [],
  "images_options": ["article-13-1.jpg"]
},
{
  "ref":"6",
  "denomination": "Contenant liquide à 3 becs",
  "image": "article-07.jpg",
  "caracteristique": ["Volume 650ml"],
  "cartons": [],
  "poids": [],
  "options": [],
  "images_options": ["article-07-1.jpg", "article-07-2.jpg"]
},
{
  "ref":"8",
  "denomination": "Boite coton tige",
  "image": "article-9.jpg",
  "caracteristique": ["Conditionnement 12 pcs"],
  "cartons": [],
  "poids": [],
  "options": [],
  "images_options": ["article-9-1.jpg","article-9-2.jpg"]
},
{
  "ref":"15",
  "denomination": "Chariot de course à roulette",
  "image": "article-16.jpg",
  "caracteristique": [""],
  "cartons": [],
  "poids": [],
  "options": []
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
    if (canape.options) {
      const options = document.createElement('p');
      options.innerHTML = `<strong>Options:</strong> ${canape.options.join(' / ')}`;
      card.appendChild(options);

    // caracteristique
    const caracteristique = document.createElement('p');
    caracteristique.innerHTML = `<strong>Caractéristiques :</strong> ${canape.caracteristique.join(' / ')}`;
    card.appendChild(caracteristique);

    // Cartons
    const cartons = document.createElement('p');
    cartons.innerHTML = `<strong>Cartons (cm):</strong> ${canape.cartons.join(' / ')}`;
    card.appendChild(cartons);

    // Poids
    const poids = document.createElement('p');
    poids.innerHTML = `<strong>Poids (kg):</strong> ${canape.poids.join(' / ')}`;
    card.appendChild(poids);

    }

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
