export default function initScrollReveal() {
	const elements = document.querySelectorAll('.scroll-reveal');
  
	const observer = new IntersectionObserver(
	  (entries, obs) => {
		entries.forEach((entry, index) => {
		  if (entry.isIntersecting) {
			entry.target.style.transitionDelay = `${index * 60}ms`;
			entry.target.classList.add('is-visible');
			obs.unobserve(entry.target);
		  }
		});
	  },
	  { threshold: 0.1 }
	);
  
	elements.forEach(el => observer.observe(el));
  }
  