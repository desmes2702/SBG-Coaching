<!DOCTYPE html>
<html lang="fr">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="Coaching sportif professionnel, individuel et en groupe. Découvrez nos services adaptés à vos besoins et vos objectifs.">
	<title>Accueil | Coaching Sportif</title>
	<link rel="stylesheet" href="style/min_css/main.min.css">
</head>

<body class="page__accueil" data-page="index" data-module="links faq">
	<div class="wrapper-1440-black">
		<?php
		include 'components/__menu.php';
		?>
	</div>

	<main class="main">
		<?php
		include 'pages/index/__hero.php';
		?>

		<div class="wrapper-1440">
			<?php
			include 'pages/index/__program.php';
			?>
		</div>

		<div class="wrapper-1440-black">
			<?php
			include 'pages/index/__coaching-business.php';
			?>
		</div>

		<div class="wrapper-1440">
			<?php
			include 'pages/index/__testimonials.php';
			?>
		</div>
	</main>

	<?php
	include 'components/__faq.php';
	?>

	<?php
	include 'components/__footer.php';
	?>

	<script type="module" src="js/global/main.js"></script>
	<script src="https://www.google.com/recaptcha/api.js" async defer></script>
</body>


</html>