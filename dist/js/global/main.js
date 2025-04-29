// 🌐 Modules globaux (même dossier que main.js)
import { initMenu } from './__menu.js';
import { initFAQ } from './__faq.js';
import { initCoaching as initGeneralCoaching } from './__coaching.js';
import { initLinks } from './__links.js';
import { initTestimonial } from './__testimonials.js';
import initScrollReveal from './__scrollReveal.js';

// 🧭 Scripts spécifiques
import { initEntreprisePerformance } from '../coaching/entreprise/__performance.js'; 

// ✅ DomContentLoaded
document.addEventListener('DOMContentLoaded', () => {

  // 🔍 Variables
  const page = document.body.dataset.page; // Exemple : <body data-page="rdv">
  const modules = document.body.dataset.module?.split(' ') || [];

  // ✅ 1. Script principal selon la page
  const routes = {
    'coaching-entreprise': () => initEntreprisePerformance(),
    'coaching-general': () => initGeneralCoaching(),
    'rdv': async () => {
      try {
        await import('../rdv/__form.js');
        console.log('Formulaire RDV chargé');
        await import('../rdv/__sendForm.js');
        console.log('Envoi du formulaire RDV prêt');
      } catch (err) {
        console.error('Erreur de chargement sur la page RDV:', err);
      }
    }
  };

  if (routes[page]) {
    routes[page]();
    console.log(`✅ Script principal activé : ${page}`);
  } else {
    console.log(`ℹ️ Aucun script principal détecté pour : ${page}`);
  }

  // ✅ 2. Modules optionnels dynamiques
  initMenu(); // le menu est toujours actif

  if (modules.includes('faq')) initFAQ();
  if (modules.includes('links')) initLinks();
  if (modules.includes('testimonials')) initTestimonial();
  if (modules.includes('scrollReveal')) initScrollReveal();

});
