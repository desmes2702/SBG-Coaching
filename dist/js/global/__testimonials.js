import { testimonials } from "../data/__testimonials.js";

export function initTestimonial() {
  // 🔹 Séparer les témoignages vedette / secondaires
  const featured = testimonials.find(t => t.featured === true);
  const lastTestimonials = testimonials.filter(t => !t.featured);

  // 🔹 1. Injection dans testimonial-new
  const imgContainer = document.querySelector(".testimonial-new__image");
  const contentContainer = document.querySelector(".testimonial-new__content");

  if (featured && imgContainer && contentContainer) {
    imgContainer.style.backgroundImage = `url('${featured.photo}')`;
    contentContainer.querySelector(".testimonial-new__name").textContent = featured.name;
    contentContainer.querySelector(".testimonial-new__job").textContent = featured.job || "";

    const ageSpan = contentContainer.querySelector(".testimonial-new__age");
    if (featured.age && ageSpan) {
      ageSpan.textContent = featured.age;
    } else if (ageSpan) {
      ageSpan.remove();
    }

    const quote = contentContainer.querySelector(".testimonial-new__quote");
    if (quote) {
      quote.innerHTML = featured.text.map(p => `<p>${p}</p>`).join('');
    }
  }

  // 🔹 2. Génération dynamique des testimonials-last
  const lastSection = document.getElementById("testimonials-last");
  if (!lastSection) return;

  const wrapper = document.createElement("div");
  wrapper.className = "testimonials__wrapper";

  const col1 = document.createElement("div");
  col1.className = "testimonials__wrapper__col1";

  const col2 = document.createElement("div");
  col2.className = "testimonials__wrapper__col2";

  lastTestimonials.forEach((t, i) => {
    const item = document.createElement("div");
    item.className = "testimonial__item";

    // 🖼️ Image de fond dans une div dédiée
    const imageDiv = document.createElement("div");
    imageDiv.className = "testimonial__item__image";
    imageDiv.style.backgroundImage = `url('${t.photo}')`;

    // 🔘 Bouton d'ouverture
    const button = document.createElement("button");
    button.className = "testimonial__item__button";
    button.innerHTML = `Voir le témoignage <span class="testimonial__item__arrow"></span>`;

    // 📄 Contenu du témoignage
    const content = document.createElement("div");
    content.className = "testimonial__item__content";

    const header = `
      <header class="testimonial__item__header">
        <div>
          <h3 class="testimonial__item__name">${t.name}</h3>
          ${t.age ? `<span>${t.age}</span>` : ""}
        </div>
        ${t.job ? `<span>${t.job}</span>` : ""}
      </header>
    `;

    content.innerHTML = header + t.text.map(p => `<p>${p}</p>`).join("");

    // 🧱 Assembler l’item
    item.appendChild(imageDiv);
    item.appendChild(button);
    item.appendChild(content);

    // 🔁 Répartition en colonne 1 / colonne 2
    if (i % 2 === 0) {
      col1.appendChild(item);
    } else {
      col2.appendChild(item);
    }
  });

  wrapper.appendChild(col1);
  wrapper.appendChild(col2);
  lastSection.appendChild(wrapper);

  // 🔹 3. Interaction pour ouvrir/fermer les témoignages
  document.querySelectorAll(".testimonial__item__button").forEach(btn => {
    btn.addEventListener("click", () => {
      const parent = btn.closest(".testimonial__item");
      const content = parent.querySelector(".testimonial__item__content");
      const isActive = content.classList.contains("testimonial__item__content-active");

      document.querySelectorAll(".testimonial__item__content").forEach(el =>
        el.classList.remove("testimonial__item__content-active")
      );
      document.querySelectorAll(".testimonial__item__button").forEach(el =>
        el.classList.remove("testimonial__item__button-active")
      );

      if (!isActive) {
        content.classList.add("testimonial__item__content-active");
        btn.classList.add("testimonial__item__button-active");
      }
    });
  });
}
