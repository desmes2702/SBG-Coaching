// =============================
// Variables principales
// =============================

const formContainer = document.querySelector('.form__container');
const formTimeline = document.querySelector('.form__timeline');
const formWrapper = document.querySelector('.form__wrapper');
const backBtn = document.querySelector('.form__back');
const nextBtn = document.querySelector('.form__next');
const undertitleSpan = document.getElementById('undertitle-specification');

// Questions
const questions = [
  { id: 1, type: 'choice', question: 'Vous êtes une entreprise, un particulier ?' },
  { id: 2, type: 'text', question: 'Expliquez-moi votre objectif sportif' },
  { id: 3, type: 'input', question: 'Quel âge avez-vous ?' },
  { id: 4, type: 'choice', question: 'Durée de votre coaching' },
  { id: 5, type: 'input', question: 'Vos coordonnées' },
  { id: 6, type: 'summary', question: 'Résumé de vos réponses' }
];

let currentIndex = 0;
const userResponses = {}; // Pour stocker les réponses

// =============================
// Fonctions utilitaires
// =============================

function updateUndertitle(value) {
  undertitleSpan.textContent = `_${value}`;
}

function animateUndertitle() {
  undertitleSpan.style.opacity = '0';
  undertitleSpan.style.transform = 'translateY(-5px)';
  setTimeout(() => {
    undertitleSpan.style.opacity = '1';
    undertitleSpan.style.transform = 'translateY(0)';
    undertitleSpan.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
  }, 50);
}

function isCurrentQuestionValid() {
  if (currentIndex === 0) {
    const selected = document.querySelector('input[name="type"]:checked');
    return !!selected;
  } else if (currentIndex === 1) {
    const textarea = document.getElementById('objectif');
    return textarea && textarea.value.trim().length >= 10;
  } else if (currentIndex === 2) {
    const ageInput = document.getElementById('age');
    const fragileChoice = document.querySelector('input[name="fragile"]:checked');
    const precisionTextarea = document.getElementById('precision');

    const ageValid = ageInput && ageInput.value >= 1 && ageInput.value <= 120;
    const fragileValid = fragileChoice !== null;

    if (fragileChoice && fragileChoice.value === 'oui') {
      const precisionValid = precisionTextarea && precisionTextarea.value.trim().length >= 5;
      return ageValid && fragileValid && precisionValid;
    }

    return ageValid && fragileValid;
  } else if (currentIndex === 3) {
    const selected = document.querySelector('input[name="duree"]:checked');
    const precisionDuree = document.getElementById('precision-duree');

    if (!selected) return false;
    if (selected.value === 'autre') {
      return precisionDuree && precisionDuree.value.trim().length >= 5;
    }
    return true;
  } else if (currentIndex === 4) {
    const nom = document.getElementById('nom');
    const prenom = document.getElementById('prenom');
    const telephone = document.getElementById('telephone');
    const email = document.getElementById('email');

    const nomValid = nom && nom.value.trim().length >= 2;
    const prenomValid = prenom && prenom.value.trim().length >= 2;
    const telephoneValid = telephone && telephone.value.trim().length >= 8;
    const emailValid = email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());

    return nomValid && prenomValid && telephoneValid && emailValid;
  }

  return true;
}

function showValidationError() {
  const formQuestion = document.querySelector('.form__question');
  formQuestion.classList.add('form__question-error');

  setTimeout(() => {
    formQuestion.classList.remove('form__question-error');
  }, 500);
}

function saveCurrentAnswer() {
  if (currentIndex === 0) {
    const selected = document.querySelector('input[name="type"]:checked');
    if (selected) userResponses.type = selected.value;
  } else if (currentIndex === 1) {
    const textarea = document.getElementById('objectif');
    if (textarea) userResponses.objectif = textarea.value.trim();
  } else if (currentIndex === 2) {
    const age = document.getElementById('age');
    const fragile = document.querySelector('input[name="fragile"]:checked');
    const precision = document.getElementById('precision');

    if (age) userResponses.age = age.value.trim();
    if (fragile) userResponses.fragile = fragile.value;
    if (precision && !precision.disabled) {
      userResponses.precision = precision.value.trim();
    } else {
      userResponses.precision = '';
    }
  } else if (currentIndex === 3) {
    const duree = document.querySelector('input[name="duree"]:checked');
    const precisionDuree = document.getElementById('precision-duree');

    if (duree) userResponses.duree = duree.value;
    if (precisionDuree && !precisionDuree.disabled) {
      userResponses.precisionDuree = precisionDuree.value.trim();
    } else {
      userResponses.precisionDuree = '';
    }
  } else if (currentIndex === 4) {
    const nom = document.getElementById('nom');
    const prenom = document.getElementById('prenom');
    const telephone = document.getElementById('telephone');
    const email = document.getElementById('email');

    if (nom) userResponses.nom = nom.value.trim();
    if (prenom) userResponses.prenom = prenom.value.trim();
    if (telephone) userResponses.telephone = telephone.value.trim();
    if (email) userResponses.email = email.value.trim();
  }
}

// =============================
// Initialisation
// =============================

function initForm() {
  generateTimeline();
  renderQuestion();
  updateNavigation();
}

function generateTimeline() {
  formTimeline.innerHTML = '';

  questions.forEach((_, index) => {
    const step = document.createElement('div');
    step.classList.add('form__timeline__step');

    const circle = document.createElement('span');
    circle.classList.add('form__timeline__circle');
    circle.dataset.index = index;

    const line = document.createElement('span');
    line.classList.add('form__timeline__line');

    step.appendChild(circle);
    if (index < questions.length - 1) step.appendChild(line);

    formTimeline.appendChild(step);
  });
}

function renderQuestion() {
  const question = questions[currentIndex];
  let questionHTML = '';

  if (currentIndex === 0) {
    questionHTML = `
      <div class="form__question">
        <div class="form__question__header">
          <span class="form__question__step">${currentIndex + 1}/${questions.length}</span>
        </div>
        <fieldset class="form__fieldset">
          <legend class="form__legend">${question.question}</legend>
          <div class="form__question__choices">
            <label class="form__question__choice">
              <input type="radio" name="type" value="Entreprise" aria-required="true" />
              <span>Entreprise</span>
            </label>
            <label class="form__question__choice">
              <input type="radio" name="type" value="Particulier" aria-required="true" />
              <span>Particulier</span>
            </label>
          </div>
        </fieldset>
      </div>
    `;
  } else if (currentIndex === 1) {
    questionHTML = `
      <div class="form__question">
        <div class="form__question__header">
          <span class="form__question__step">${currentIndex + 1}/${questions.length}</span>
        </div>
        <div class="form__question__group">
          <label for="objectif" class="form__label">Expliquez-moi votre objectif sportif *</label>
          <textarea id="objectif" name="objectif" class="form__textarea" rows="5" aria-required="true"></textarea>
        </div>
      </div>
    `;
  } else if (currentIndex === 2) {
    questionHTML = `
      <div class="form__question">
        <div class="form__question__header">
          <span class="form__question__step">${currentIndex + 1}/${questions.length}</span>
        </div>
        <div class="form__question__group">
          <label for="age" class="form__label">Quel âge avez-vous ? *</label>
          <input type="number" id="age" name="age" class="form__input" min="1" max="120" aria-required="true" placeholder="Votre âge" />
        </div>
        <div class="form__question__group">
          <p class="form__label">Avez-vous une fragilité/handicap physique ? *</p>
          <div class="form__question__choices">
            <label class="form__question__choice">
              <input type="radio" name="fragile" value="oui" aria-required="true" />
              <span>Oui</span>
            </label>
            <label class="form__question__choice">
              <input type="radio" name="fragile" value="non" aria-required="true" />
              <span>Non</span>
            </label>
            <label class="form__question__choice">
              <input type="radio" name="fragile" value="ne-souhaite-pas-preciser" aria-required="true" />
              <span>Ne souhaite pas préciser</span>
            </label>
          </div>
        </div>
        <div class="form__question__group">
          <label for="precision" class="form__label">Si "oui" précisez :</label>
          <textarea id="precision" name="precision" class="form__textarea" rows="4" placeholder="Précision(s)"></textarea>
        </div>
      </div>
    `;
  } else if (currentIndex === 3) {
    questionHTML = `
      <div class="form__question">
        <div class="form__question__header">
          <span class="form__question__step">${currentIndex + 1}/${questions.length}</span>
        </div>
        <fieldset class="form__fieldset">
          <legend class="form__legend">Durée de votre coaching *</legend>
          <div class="form__question__choices">
            <label class="form__question__choice">
              <input type="radio" name="duree" value="3 mois" aria-required="true" />
              <span>3 mois</span>
            </label>
            <label class="form__question__choice">
              <input type="radio" name="duree" value="6 mois" aria-required="true" />
              <span>6 mois</span>
            </label>
            <label class="form__question__choice">
              <input type="radio" name="duree" value="12 mois" aria-required="true" />
              <span>12 mois</span>
            </label>
            <label class="form__question__choice">
              <input type="radio" name="duree" value="autre" aria-required="true" />
              <span>Autre</span>
            </label>
          </div>
        </fieldset>
        <div class="form__question__group">
          <label for="precision-duree" class="form__label">Si "autre" précisez :</label>
          <textarea id="precision-duree" name="precision-duree" class="form__textarea" rows="4" placeholder="Précision(s)"></textarea>
        </div>
      </div>
    `;
  } else if (currentIndex === 4) {
    questionHTML = `
      <div class="form__question">
        <div class="form__question__header">
          <span class="form__question__step">${currentIndex + 1}/${questions.length}</span>
        </div>
        <div class="form__question__group">
          <label for="nom" class="form__label">Nom *</label>
          <input type="text" id="nom" name="nom" class="form__input" aria-required="true" placeholder="Votre nom" />
        </div>
        <div class="form__question__group">
          <label for="prenom" class="form__label">Prénom *</label>
          <input type="text" id="prenom" name="prenom" class="form__input" aria-required="true" placeholder="Votre prénom" />
        </div>
        <div class="form__question__group">
          <label for="telephone" class="form__label">Numéro de téléphone *</label>
          <input type="tel" id="telephone" name="telephone" class="form__input" placeholder="Votre numéro" />
        </div>
        <div class="form__question__group">
          <label for="email" class="form__label">Adresse email *</label>
          <input type="email" id="email" name="email" class="form__input" aria-required="true" placeholder="Votre email" />
        </div>
      </div>
    `;
  } else if (currentIndex === 5) {
    questionHTML = `
      <div class="form__question form__question__summary">
        <div class="form__question__header">
          <span class="form__question__step">${currentIndex + 1}/${questions.length}</span>
        </div>
        <div class="form__question__group">
          <p><strong>Type :</strong> ${userResponses.type || '-'}</p>
          <p><strong>Objectif :</strong> ${userResponses.objectif || '-'}</p>
          <p><strong>Âge :</strong> ${userResponses.age || '-'}</p>
          <p><strong>Fragilité :</strong> ${userResponses.fragile || '-'}</p>
          ${userResponses.precision ? `<p><strong>Précision :</strong> ${userResponses.precision}</p>` : ''}
          <p><strong>Durée :</strong> ${userResponses.duree || '-'}</p>
          ${userResponses.precisionDuree ? `<p><strong>Précision Durée :</strong> ${userResponses.precisionDuree}</p>` : ''}
          <p><strong>Nom :</strong> ${userResponses.nom || '-'}</p>
          <p><strong>Prénom :</strong> ${userResponses.prenom || '-'}</p>
          <p><strong>Téléphone :</strong> ${userResponses.telephone || '-'}</p>
          <p><strong>Email :</strong> ${userResponses.email || '-'}</p>
        </div>
      </div>
    `;
  }

  formWrapper.innerHTML = questionHTML;
  updateTimeline();
}

function updateTimeline() {
  const circles = document.querySelectorAll('.form__timeline__circle');
  circles.forEach((circle, index) => {
    circle.classList.remove('form__timeline__circle-viewed', 'form__timeline__circle-reading');
    if (index < currentIndex) {
      circle.classList.add('form__timeline__circle-viewed');
    } else if (index === currentIndex) {
      circle.classList.add('form__timeline__circle-reading');
    }
  });
}

function updateNavigation() {
  backBtn.hidden = currentIndex === 0;
}

// =============================
// Navigation (Back / Next)
// =============================

nextBtn.addEventListener('click', () => {
  if (!isCurrentQuestionValid()) {
    showValidationError();
    return;
  }

  saveCurrentAnswer();

  if (currentIndex < questions.length - 1) {
    currentIndex++;
    renderQuestion();
    updateNavigation();
  }
});

backBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion();
    updateNavigation();
  }
});

// =============================
// Lancement
// =============================

initForm();
