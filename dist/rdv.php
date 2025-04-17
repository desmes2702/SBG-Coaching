<!DOCTYPE html>
<html lang="fr">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="Coaching sportif professionnel, individuel et en groupe. Découvrez nos services adaptés à vos besoins et vos objectifs.">
	<title>Accueil | Coaching Sportif</title>
	<link rel="stylesheet" href="style/min_css/main.min.css">
</head>

<body class="page__rdv" data-page="rdv" data-variant="black" data-module="links faq">

	<div class="wrapper-1440">
		<?php
		include 'components/__menu.php';
		?>
	</div>

	<main class="main ">
		<div class="wrapper-1440">
			<div class="flex-center-column">
				<h1 class="title">Prendre rendez-vous</h1>
				<!-- éditer l'agenda et publié l'agenda -->
				<iframe src="https://calendar.google.com/calendar/embed?src=samuel.billa.garcia%40gmail.com&ctz=Europe%2FParis" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
			</div>
		</div>
	</main>

	<?php
	include 'components/__faq.php';
	?>
	</div>

	<?php
	include 'components/__footer.php';
	?>

	<script type="module" src="js/global/main.js"></script>
	<script src="https://www.google.com/recaptcha/api.js" async defer></script>

</body>

</html>