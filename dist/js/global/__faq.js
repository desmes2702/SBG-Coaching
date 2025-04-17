export function initFAQ() {
	const buttons = document.querySelectorAll('.faq__btn-more');

	buttons.forEach(button => {
		button.addEventListener('click', () => {
			const faqItem = button.closest('.faq__item');
			const answer = faqItem.querySelector('.faq__answer');
			const isOpen = faqItem.classList.contains('faq--active');

			// Fermer toutes les autres
			document.querySelectorAll('.faq__item').forEach(item => {
				item.classList.remove('faq--active');
				item.querySelector('.faq__answer').classList.remove('is-visible');
				item.querySelector('.faq__btn-more').setAttribute('aria-expanded', 'false');
				item.querySelector('.faq__btn-more').classList.remove('rotated'); // enlève la rotation
			});

			if (!isOpen) {
				faqItem.classList.add('faq--active');
				answer.classList.add('is-visible');
				button.setAttribute('aria-expanded', 'true');
				button.classList.add('rotated'); // ✅ applique la rotation
			}
		});
	});
}
