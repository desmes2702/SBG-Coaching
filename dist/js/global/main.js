// 🌐 Modules globaux (même dossier que main.js)
import { initMenu } from './__menu.js';
import { initFAQ } from './__faq.js';
import { initCoaching } from './__coaching.js';
import { initLinks } from './__links.js';
import { initTestimonial } from './__testimonial.js';


// 🧭 Scripts spécifiques
import { initEntreprisePerformance } from '../coaching/entreprise/__performance.js';
/* import { initGeneralCoaching } from '../coaching/general/__coaching.js'; */

// 🔍 Variables
const page = document.body.dataset.page;
const modules = document.body.dataset.module?.split(' ') || [];

// ✅ 1. Script principal selon la page
const routes = {
  'coaching-entreprise': () => initEntreprisePerformance(),
  'coaching-general': () => initGeneralCoaching(),
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
if (modules.includes('coaching')) initCoaching();
if (modules.includes('links')) initLinks();
if (modules.includes('testimonials')) initTestimonial();