<?php
	$GLOBALS["settings"] = array(
		'title' => 'title da página',
		'description' => 'metatag description da página',
		'url' => 'url-amigável-sem-barras',
	);

	include_once $_SERVER['DOCUMENT_ROOT'].'/partials/header.php';
?>
<main role="main">
	<h2>Home - Main Content</h2>
</main>
<?php include_once $_SERVER['DOCUMENT_ROOT'].'/partials/footer.php'; ?>