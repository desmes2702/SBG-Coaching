export function initMenu() {
	const menu = document.querySelector(".menu");
	const openMenuButton = document.querySelector(".menu__toggle");
	const closeMenuButton = document.querySelector(".menu__close");

	if (!menu || !openMenuButton || !closeMenuButton) {
		console.warn("⚠️ Éléments du menu non trouvés dans le DOM.");
		return;
	}

	// Ouvrir le menu
	openMenuButton.addEventListener("click", function () {
		menu.classList.add("menu-open");
	});

	// Fermer le menu
	closeMenuButton.addEventListener("click", function () {
		menu.classList.remove("menu-open");
	});

	// Appliquer le thème du menu
	applyMenuVariant();
}

// 🎨 Appliquer le thème du menu selon le data-variant du <body>
function applyMenuVariant() {
	const variant = document.body.dataset.variant;

	const nav = document.querySelector('.header__nav');
	const logo = document.querySelector('#menu__logo');
	const burgerIcon = document.querySelector('#menu__icon');
	const logoContainer = document.querySelector('.header__logo');

	// Par défaut → thème blanc
	if (!variant || variant === 'white') {
		nav?.classList.remove('header__nav-black');
		logoContainer?.classList.remove('header__logo-black');
		if (logo) logo.src = 'img/logo-white.svg';
		if (burgerIcon) burgerIcon.src = 'img/icon__burger-white.svg';
	}

	// Thème noir
	if (variant === 'black') {
		nav?.classList.add('header__nav-black');
		logoContainer?.classList.add('header__logo-black');
		if (logo) logo.src = 'img/logo-black.svg';
		if (burgerIcon) burgerIcon.src = 'img/icon__burger-black.svg';
	}
}