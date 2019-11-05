<?php

require_once 'functions.php';

$GLOBALS["app"] = array(
	'path' 	=> 'https://'.$_SERVER['HTTP_HOST'],
);

if(!@include( urlRoutes()['page-file'] ) )
{
	include 'pages/404.php';
}