<!DOCTYPE html>
<html lang="fr">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="Coaching sportif professionnel, individuel et en groupe. Découvrez nos services adaptés à vos besoins et vos objectifs.">
	<title>Témoignages</title>
	<link rel="stylesheet" href="style/min_css/main.min.css">
</head>

<body class="page__testimonials" data-page="testimonials" data-variant="black" data-module="testimonials links scrollReveal">

	<div class="wrapper-1440">
		<?php
		include 'components/__menu.php';
		?>
	</div>

	<main class="main">
		<?php
		include 'pages/testimonials/__testimonial-new.php';
		?>
		<?php
		include 'pages/testimonials/__testimonials-last.php';
		?>
		<?php
		include 'pages/testimonials/__testimonials-submit.php';
		?>
	</main>

	<?php
	include 'components/__footer.php';
	?>
</body>

<script type="module" src="js/global/main.js"></script>
<script src="https://www.google.com/recaptcha/api.js" async defer></script>

</html>