<?php
$myfile = fopen("song", "r") or die("Unable to open file!");
echo fread($myfile,filesize("song"));
fclose($myfile);
?> 
