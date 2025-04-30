export const heroContents = [
	{
	  title: "Coaching sportif <span>_Entreprise</span>",
	  paragraphs: [
		"Dans le monde professionnel moderne, la productivité et le bien-être des employés sont plus interconnectés que jamais.",
		"Reconnaissant cette réalité, le coaching en entreprise émerge comme une solution incontournable pour les organisations visant l’excellence."
	  ],
	  cta: {
		href: "rdv.php",
		text: "Prendre rdv"
	  }
	},
	{
	  title: "", // pas de titre à afficher pour la vidéo
	  paragraphs: [], // pas de paragraphes
	  video: `<div class="video-wrapper">
    <video 
      src="videos/rtlTvi.mp4"
      muted
      preload="metadata"
      controls
    ></video>
  </div>`,

	  cta: null
	},
	{
	  title: "<div class=\"title\">Un dispositif <span>_100% déductible</span></div>", 
	  paragraphs: [
		"Le coaching sportif en entreprise est un investissement intelligent, totalement déductible pour votre société.",
		"Valorisez votre image RH tout en maximisant le bien-être de vos collaborateurs."
	  ],
	  cta: {
		href: "https://www.beci.be/blog/talents-33/bien-etre-au-travail-quels-avantages-et-quel-traitement-fiscal-et-social-4310?utm_source=chatgpt.com",
		text: "En savoir plus"
	  },
	  bgColorClass: 'coaching__hero__content-primary' // ← C’est CE nom qui doit apparaître
	}
  ];
  