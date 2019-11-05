<?php header('Content-type: text/html; charset=utf-8'); ?>
<!doctype html>
<html amp lang="pt-br">
<head>
	<title><?php echo $settings['title']; ?></title>

	<link rel="icon" href="<?php echo $app['path']; ?>/images/optimized/favicon-transparent-1.png" sizes="512x512" />
	
	<link rel="canonical" href="<?php echo $app['path'].'/'.urlRoutes()['page-name']; ?>">
	<link rel="stylesheet" type="text/css" href="<?php echo $app['path']; ?>/css/style.css">

	<meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
	<meta name="robots" content="noindex,follow"/>
	
	<meta property="og:locale" content="pt_BR" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content="<?php echo $settings['title']; ?>" />
	<meta property="og:description" content="<?php echo $settings['description']; ?>" />
	<meta property="og:url" content="https://comparadores.webitcoin.com.br/<?php echo $settings['url']; ?>/" />
	<meta property="og:site_name" content="Comparadores Webitcoin" />
	<meta property="og:image" content="<?php echo $app['path']; ?>/images/optimized/favicon-transparent-1.png" />
	<meta property="og:image:secure_url" content="<?php echo $app['path']; ?>/images/optimized/favicon-transparent-1.png" />
	<meta property="og:image:width" content="520" />
	<meta property="og:image:height" content="520" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:description" content="<?php echo $settings['description']; ?>" />
	<meta name="twitter:title" content="<?php echo $settings['title']; ?>" />
	<meta name="twitter:image" content="<?php echo $app['path']; ?>/images/optimized/favicon-transparent-1.png" />
</head>
<body class="<?php echo 'current-page-'.urlRoutes()['page-name']; ?>" data-path="/app/">
<header id="mainHeader">
	<div id="siteBar" role="banner">
		<div class="container">
			<div class="row">
				<div class="col-xs-6 col-xl-4 col-sm-3 col-md-4">
					<h1>
						<a href="/" title="Página Inicial">
							<span>Título do Projeto</span>
						</a>
					</h1>
					<h2 class="hide">Descrição do Projeto</h2>
				</div>
				
				<div class="col-xs-6 col-xl-8 col-sm-9 col-md-8">
					<nav class="mainMenu">
						<div class="wrapMenu">
							<?php
								mainMenu(array(
									'precos' => array(
										'title' => 'Comparador de preços do Bitcoin nas Exchanges',
										'label' => '<strong>Preço do Bitcoin <span>nas Exchanges</span></strong>',
										'icon' => 'icon-logo-bitcoin',
										'url' => 'comparador-de-preco-do-bitcoin-em-exchanges',
									),
									'taxas' => array(
										'title' => 'Comparador de Taxas das Exchanges',
										'label' => '<strong>Comparador de Taxas <span>das Exchanges</span></strong>',
										'icon' => 'icon-lupa',
										'url' => 'comparador-de-exchanges',
									),
									'acessos' => array(
										'title' => 'Comparador de Acesso das Exchanges',
										'label' => '<strong>Comparador de <span>Acessos</span></strong>',
										'icon' => 'icon-similarweb',
										'url' => 'comparadores-de-acessos-das-exchanges',
									)
								));
							?>
						</div>
					</nav>
				</div>
			</div>
		</div>
	</div>
</header>