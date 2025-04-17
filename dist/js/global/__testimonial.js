export function initTestimonial() {
	const testimonialItems = document.querySelectorAll(".testimonial__item");

	if (!testimonialItems.length) {
		console.warn("⚠️ Aucun témoignage détecté dans le DOM.");
		return;
	}

	testimonialItems.forEach(item => {
		const button = item.querySelector(".testimonial__item__button");
		const content = item.querySelector(".testimonial__item__content");

		if (!button || !content) return;

		button.addEventListener("click", function () {
			const isActive = content.classList.contains("testimonial__item__content-active");

			// Fermer tous les contenus actifs
			document.querySelectorAll(".testimonial__item__content").forEach(el => {
				el.classList.remove("testimonial__item__content-active");
			});
			document.querySelectorAll(".testimonial__item__button").forEach(btn => {
				btn.classList.remove("testimonial__item__button-active");
			});

			// Activer celui cliqué
			if (!isActive) {
				content.classList.add("testimonial__item__content-active");
				button.classList.add("testimonial__item__button-active");
			}
		});
	});
}