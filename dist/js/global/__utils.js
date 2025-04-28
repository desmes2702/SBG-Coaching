// Formate un texte : - remplace les tirets par espaces - majuscule sur 1ère lettre
function formatText(text) {
	if (!text) return '-';
	text = text.replace(/-/g, ' ').toLowerCase();
	return text.charAt(0).toUpperCase() + text.slice(1);
  }
  
  // Formate un numéro de téléphone : ajoute des espaces tous les 3 chiffres
  function formatNumber(number) {
	if (!number) return '-';
	return number.replace(/\D/g, '').replace(/(\d{2})(?=\d)/g, '$1 ').trim();
  }
  
  // Formate un email : tout en minuscules
  function formatEmail(email) {
	if (!email) return '-';
	return email.trim().toLowerCase();
  }

  // Pour que tout soit visible quand on importe * (nécessaire dans certains cas)
export { formatText, formatNumber, formatEmail };