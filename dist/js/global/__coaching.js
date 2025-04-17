// Import du contenu (textes, titres, boutons...) depuis un fichier JS externe
import { heroContents as heroContentsRaw } from "../data/__coaching__heroContents.js";

export function initCoaching() {
  // Récupération des éléments du DOM nécessaires à l'affichage et à la navigation
  const elements = {
    content1: document.getElementById("content-1"),
    heroIndex: document.getElementById("hero__index"),
    btnLeft: document.getElementById("hero__content-left"),
    btnRight: document.getElementById("hero__content-right"),
    contentElements: Array.from(document.querySelectorAll('.coaching__hero__content-secondary'))
  };

  // Vérification que tous les éléments sont bien présents dans le DOM
  if (!elements.content1 || !elements.heroIndex || !elements.btnLeft || !elements.btnRight) {
    console.error("Un ou plusieurs éléments sont manquants dans le DOM.");
    return;
  }

  // Initialisation de l'état
  const state = {
    currentIndex: 1,
    totalSlides: elements.contentElements.length + 1, // +1 car le premier bloc (content-1) est fixe
    heroContents: heroContentsRaw.slice(0, elements.contentElements.length + 1) // On limite le contenu importé
  };

  // Fonction qui met à jour le contenu dynamique selon l'index donné
  function updateContent(index) {
    if (index === state.currentIndex) return; // pas de changement => on sort
    
    const data = state.heroContents[index - 1]; // récupération du contenu associé à l'index
    const bgClass = `coaching__hero__content-bck${index}`; // classe de fond dynamique
    
    // Construction du nouveau contenu
    const contentHTML = `
      <h1>${data.title}</h1>
      ${data.paragraphs.map(text => `<p>${text}</p>`).join('')}
      ${data.cta ? 
        `<div class="hero__content__cta">
          <a href="${data.cta.href}" class="button button-red">${data.cta.text}</a>
        </div>` : ''}
      <div class="hero__content__btn">
        <button id="hero__content-left" class="${index === 1 ? 'hero__content__btn-disabled' : ''}"></button>
        <span id="hero__index">${index}</span>
        <span id="hero__index-slash">/${state.totalSlides}</span>
        <button id="hero__content-right" class="${index === state.totalSlides ? 'hero__content__btn-disabled' : ''}"></button>
      </div>
    `;
    
    // Mise à jour du contenu et de la classe de fond
    elements.content1.innerHTML = contentHTML;
    elements.content1.className = `coaching__hero__content__bck ${bgClass}`;
    
    // Mise à jour de l'index courant affiché
    elements.heroIndex.textContent = index;
    state.currentIndex = index;
    
    // Récupération et configuration des nouveaux boutons de navigation
    const newBtnLeft = document.getElementById("hero__content-left");
    const newBtnRight = document.getElementById("hero__content-right");
    
    if (newBtnLeft && newBtnRight) {
      newBtnLeft.addEventListener("click", (e) => {
        e.stopPropagation();
        navigate(-1);
      });
      
      newBtnRight.addEventListener("click", (e) => {
        e.stopPropagation();
        navigate(1);
      });
    }
  }

  // Navigation entre les slides
  function navigate(direction) {
    const newIndex = state.currentIndex + direction;
    
    // Vérification des limites et mise à jour conditionnelle
    if (newIndex >= 1 && newIndex <= state.totalSlides) {
      updateContent(newIndex);
    }
  }

  // Délégation d'événements pour les boutons de navigation principaux
  elements.btnLeft.addEventListener("click", () => navigate(-1));
  elements.btnRight.addEventListener("click", () => navigate(1));

  // Écoute des clics sur les blocs secondaires (content-2, content-3...)
  elements.contentElements.forEach((el, i) => {
    const targetIndex = i + 2; // car index 1 = content-1, index 2 = content-2, etc.
    el.addEventListener("click", () => updateContent(targetIndex));
  });

  // Initialisation du contenu à l'ouverture de la page
  updateContent(1);
}

// Fonction utilitaire pour créer un élément avec ses attributs et contenu
function createEl(tag, attributes = {}, content = '') {
  const el = document.createElement(tag);
  
  // Ajout des attributs
  Object.entries(attributes).forEach(([key, value]) => {
    el.setAttribute(key, value);
  });
  
  // Ajout du contenu
  if (content) {
    el.innerHTML = content;
  }
  
  return el;
}
