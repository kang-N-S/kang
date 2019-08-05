<?php
	header("Conntent-type:text/html;charset=utf-8");

	$id=$_GET["username"];
	$pwd=$_GET["password"];
	$conn=mysql_connect("localhost","root","root");
	
	if($conn){
		mysql_select_db("user");
	}
	
	$result=mysql_query("select * from suer_info where num='$id' and pwd='$pwd'",$conn);
	// var_dump($result);die;
	
	$row=mysql_num_rows($result);
	// echo $row;
	
	if($row==1){
		echo 0;
	}else{
		echo 1;
	}
?>

