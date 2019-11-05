<?php

/* ----------------------------------------------------------------------------------

FUNÇÕES DO PROJETO

---------------------------------------------------------------------------------- */

/* ROTAS */

function urlRoutes()
{

	$pathName = explode('/', $_SERVER['REQUEST_URI']);

	if( isset($pathName[4]) && $pathName[4] )
	{
		$pageFile = 'pages/'.$pathName[2].'-'.$pathName[3].'-'.$pathName[4].'.php';
		$pageName = $pathName[4];
	}
	else if( isset($pathName[3]) && $pathName[3] )
	{
		$pageFile = 'pages/'.$pathName[2].'-'.$pathName[3].'.php';
		$pageName = $pathName[3];
	}
	else if( isset($pathName[2]) && $pathName[2] )
	{
		$pageFile = 'pages/'.$pathName[2].'.php';
		$pageName = $pathName[2];
	}
	else
	{
		$pageFile = 'pages/home.php';
		$pageName = 'home';
	}

	return array(
		'page-file' => $pageFile,
		'page-name'	=> $pageName
	);
}

function mainMenu($menuItens)
{
	function currentMenuitem($url)
	{
		$pathName = explode('/', $_SERVER['REQUEST_URI']);

		if( isset($pathName[1]) && $pathName[1] )
		{
			if( $url == $pathName[1] )
			{
				return 'class="current-page"';
			}
		}
	}

	$html = '<ul class="main-menu">';

	foreach ($menuItens as $item)
	{
		$html .= '
			<li '.currentMenuitem($item['url']).'>
				<a href="/'.$item['url'].'" title="'.$item['title'].'">
					<i class="'.$item['icon'].'"></i>
					'.$item['label'].'
				</a>
			</li>
		';
	}

	$html .= '</ul>';
	
	echo $html;
}