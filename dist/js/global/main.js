// 🌐 Modules globaux (même dossier que main.js)
import { initMenu } from './__menu.js';
import { initFAQ } from './__faq.js';
import { initCoaching } from './__coaching.js';
import { initLinks } from './__links.js';
import { initTestimonial } from './__testimonials.js';
import initScrollReveal from './__scrollReveal.js';

// 🧭 Scripts spécifiques
import { initEntreprisePerformance } from '../coaching/entreprise/__performance.js';

// ✅ DomContentLoaded
document.addEventListener('DOMContentLoaded', () => {

  // 🔧 Utilitaire : attendre qu’un élément apparaisse dans le DOM
  function waitForElement(selector, callback) {
    const el = document.querySelector(selector);
    if (el) return callback(el);
    const observer = new MutationObserver(() => {
      const el = document.querySelector(selector);
      if (el) {
        observer.disconnect();
        callback(el);
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  // 🔍 Variables
  const page = document.body.dataset.page; // Exemple : <body data-page="rdv">
  const modules = document.body.dataset.module?.split(' ') || [];

  // ✅ 1. Script principal selon la page
  const routes = {
    'coaching-entreprise': async () => {
      const { heroContents } = await import('../coaching/entreprise/__heroContents.js');
      initCoaching(heroContents);
      initEntreprisePerformance();
    },

    'coaching-general': async () => {
      const { heroContents } = await import('../coaching/general/__heroContents.js');
      waitForElement('#page__coaching__wrapper__hero', () => {
        initCoaching(heroContents);
      });
    },

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
