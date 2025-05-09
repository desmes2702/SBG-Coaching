export function initEntreprisePerformance() {
	console.log("✅ Script Entreprise activé");

	const buttons = document.querySelectorAll('.entreprise__perfo__btnMore');
	const items = document.querySelectorAll('.entreprise__perfo__item');

	// ✅ Activation au chargement
	items.forEach(item => {
		const index = item.getAttribute('data-index');
		const button = item.querySelector('.entreprise__perfo__btnMore');

		if (index === "1") {
			item.classList.add('entreprise__perfo__item-active');
			button?.setAttribute('aria-expanded', 'true');
			button?.classList.add('rotated');
		} else {
			item.classList.remove('entreprise__perfo__item-active');
			button?.setAttribute('aria-expanded', 'false');
			button?.classList.remove('rotated');
		}
	});

	// ✅ Interaction dynamique
	buttons.forEach(button => {
		button.addEventListener('click', () => {
			const item = button.closest('.entreprise__perfo__item');
			const isActive = item.classList.contains('entreprise__perfo__item-active');

			items.forEach(li => {
				li.classList.remove('entreprise__perfo__item-active');
				li.querySelector('.entreprise__perfo__btnMore')?.setAttribute('aria-expanded', 'false');
				li.querySelector('.entreprise__perfo__btnMore')?.classList.remove('rotated');
			});

			if (!isActive) {
				item.classList.add('entreprise__perfo__item-active');
				button.setAttribute('aria-expanded', 'true');
				button.classList.add('rotated');
			}
		});
	});
}