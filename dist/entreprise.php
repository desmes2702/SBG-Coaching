<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="Coaching sportif professionnel, individuel et en groupe. Découvrez nos services adaptés à vos besoins et vos objectifs.">
	<title>Coaching d'entreprise</title>
	<link rel="stylesheet" href="style/min_css/main.min.css">
	<title>Document</title>
</head>

<body class="page" id="page__coaching" data-variant="black" data-page="coaching-entreprise" data-module="coaching faq links scrollReveal">
	<div class="wrapper-1440" id="page__coaching__wrapper__menu">
		<?php
		include 'components/__menu.php';
		?>
	</div>

	<main class="main">
		<?php
		include 'pages/entreprise/__hero.php';
		?>
		<?php
		include 'pages/entreprise/__performance.php';
		?>
		<?php
		include 'pages/entreprise/__improve.php';
		?>
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