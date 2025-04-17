export function initLinks() {
	const links = document.querySelectorAll('.social__link');

	const socialLinks = {
		linkedin: {
			url: 'https://www.linkedin.com/company/sbg-leadership-coaching-and-consulting/',
		},
		facebook: {
			url: 'https://www.facebook.com/samuelbillagarciacoaching',
		},
		instagram: {
			url: 'https://www.instagram.com/sambillagarcia/',
		},
	};

	links.forEach(link => {
		const platform = link.dataset.social;
		const variant = link.dataset.variant || 'white'; // default fallback
		const data = socialLinks[platform];

		if (data) {
			// Met à jour le lien
			link.href = data.url;

			// Met à jour l’image si présente
			const img = link.querySelector('img');
			if (img) {
				img.src = `img/icon__${platform}-${variant}.svg`;
				img.alt = platform.charAt(0).toUpperCase() + platform.slice(1);
			}

			// Met à jour l’aria-label (fallback s’il n’est pas défini dans le HTML)
			link.setAttribute('aria-label', platform.charAt(0).toUpperCase() + platform.slice(1));
		}
	});
}

// Appelle la fonction dès que le DOM est prêt
document.addEventListener('DOMContentLoaded', initLinks);