<!DOCTYPE html>
<html lang="fr">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="Coaching sportif professionnel, individuel et en groupe. Découvrez nos services adaptés à vos besoins et vos objectifs.">
	<title>Coaching Hero</title>
	<link rel="stylesheet" href="style/min_css/main.min.css">
</head>

<body class="page" id="page__about" data-variant="" data-page="about" data-module=" links faq">
	<div class="wrapper-1440-black" id="">
		<?php
		include 'components/__menu.php';
		?>
	</div>
	<main>
		<?php
		include 'pages/about/__hero.php';
		?>

		<?php
		include 'pages/about/__experience.php';
		?>

		<?php
		include 'pages/about/__slogan.php';
		?>

		<?php
		include 'pages/about/__message.php';
		?>
	</main>

	<?php
	include 'components/__faq.php';
	?>

	<?php
	include 'components/__footer.php';
	?>

	<script>
		document.addEventListener("DOMContentLoaded", () => {
			const slogan = document.querySelector(".slogan__text");
			slogan.addEventListener("animationend", () => {
				slogan.classList.add("mask-clear");
			});
		});
	</script>
	<script type="module" src="js/global/main.js"></script>
	<script src="https://www.google.com/recaptcha/api.js" async defer></script>
</body>


</html>