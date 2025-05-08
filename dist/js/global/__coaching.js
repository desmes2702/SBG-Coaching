export function initCoaching(heroContentsRaw) {
  const elements = {
    content1: document.getElementById("content-1"),
    heroIndex: null, // injecté plus tard
    contentElements: Array.from(document.querySelectorAll('.coaching__hero__content-secondary'))
  };

  if (!elements.content1) {
    console.error("❌ #content-1 manquant dans le DOM.");
    return;
  }

  if (!Array.isArray(heroContentsRaw) || heroContentsRaw.length === 0) {
    console.error("❌ Contenu Hero invalide ou vide :", heroContentsRaw);
    return;
  }

  const totalSlides = elements.contentElements.length + 1;
  const heroContents = heroContentsRaw.slice(0, totalSlides);

  const state = {
    currentIndex: 1,
    totalSlides,
    heroContents
  };

  function updateContent(index) {
    if (index === state.currentIndex) return;

    const data = state.heroContents[index - 1];
    if (!data) {
      console.warn(`⚠️ Aucun contenu Hero trouvé pour l’index ${index}`);
      return;
    }

    const bgClass = data.bgColorClass
      ? data.bgColorClass
      : data.video
        ? 'coaching__hero__video'
        : `coaching__hero__content-bck${index}`;

    const contentHTML = `
      ${data.title ? `<h1>${data.title}</h1>` : ''}
      ${data.video ? data.video : ''}
      ${data.paragraphs?.length
        ? data.paragraphs.map(text => `<p>${text}</p>`).join('')
        : ''}
      ${data.cta ? `
        <div class="hero__content__cta">
          <a href="${data.cta.href}" class="button button-red">${data.cta.text}</a>
        </div>` : ''}
      <div class="hero__content__btn">
        <button id="hero__content-left" class="${index === 1 ? 'hero__content__btn-disabled' : ''}"></button>
        <span id="hero__index">${index}</span>
        <span id="hero__index-slash">/${state.totalSlides}</span>
        <button id="hero__content-right" class="${index === state.totalSlides ? 'hero__content__btn-disabled' : ''}"></button>
      </div>
    `;

    elements.content1.classList.add("fade-in");
    setTimeout(() => {
      elements.content1.classList.remove("fade-in");
    }, 300);

    elements.content1.innerHTML = contentHTML;
    elements.content1.className = `coaching__hero__content__bck ${bgClass}`;

    const heroIndex = document.getElementById("hero__index");
    if (heroIndex) heroIndex.textContent = index;

    state.currentIndex = index;
  }

  function navigate(direction) {
    const newIndex = state.currentIndex + direction;
    if (newIndex >= 1 && newIndex <= state.totalSlides) {
      updateContent(newIndex);
    }
  }

  // Navigation : flèches
  elements.content1.addEventListener("click", (e) => {
    if (e.target.id === "hero__content-left") {
      e.stopPropagation();
      navigate(-1);
    }
    if (e.target.id === "hero__content-right") {
      e.stopPropagation();
      navigate(1);
    }
  });

  // Vignettes secondaires
  elements.contentElements.forEach((el, i) => {
    const targetIndex = i + 2;
    el.addEventListener("click", () => updateContent(targetIndex));
  });

  // Initialisation
  updateContent(1);
}
