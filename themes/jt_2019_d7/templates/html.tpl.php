<!DOCTYPE html>
<html lang="pt-br">

<head>
<title><?php print $head_title; ?></title>
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="theme-color" content="#444444" />

<link rel="shortcut icon" href="/sites/all/themes/jt_2019_d7/images/favicon.ico" type="image/vnd.microsoft.icon">

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-117651240-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-117651240-1');
</script>

<?php print $head; ?>
<?php print $styles; ?>
<?php print $scripts; ?>

<!--[if lt IE 9]>
<script src="/sites/all/themes/jt_2019_d7/js/html5shiv.js"></script>
<![endif]-->

<!--[if IE]>
<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Overlock" rel="stylesheet">
<![endif]-->
</head>

<body class="<?php print $classes; ?>"<?php print $attributes; ?>>
  <?php print $page_top; ?>
  <?php print $page; ?>
  <?php print $page_bottom; ?>

<noscript>
  <!-- Lista de áreas afetadas pela desabilitação do JavaScript -->
</noscript>

</body>

</html>