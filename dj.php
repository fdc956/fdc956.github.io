<?php
$myfile = fopen("dj", "r") or die("Unable to open file!");
echo fread($myfile,filesize("dj"));
fclose($myfile);
?> 
