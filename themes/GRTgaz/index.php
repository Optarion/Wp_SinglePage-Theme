<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta viewport="width=device-width, initial-scale=1">
	<title><?php bloginfo(); ?> - <?php bloginfo('description'); ?></title>
	<link href='https://fonts.googleapis.com/css?family=Roboto:100, 300, 400,700,900' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" type="text/css" href="<?php bloginfo('stylesheet_url'); ?>">
</head>
<body>
<?php
while(have_posts()){
	the_post();
		the_content();

} ?>

	<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
	<script src="<?php echo get_template_directory_uri() ?>/js/scripts.js"></script>
</body>
</html>