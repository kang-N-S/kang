<?php 
	header("Content-type:text/html;charset=utf-8");

	$user = $_POST["user"];
	$pwd=$_POST["pwd"];
	// $temail=$_POST['temail']
	$conn=mysql_connect("localhost","root","root");

	if($conn){
		mysql_select_db("user");
	}
	$result=mysql_query("select * from suer_info where user='$user'",$conn);
	$row=mysql_num_rows($result);
	if($row==1){
		echo 0;
	}else{
		$res=mysql_query("insert into suer_info values('$user','$pwd','')",$conn);
		echo 1;
	}

	// 	$conn=mysql_connect("localhost","root","root");
	// 	
	// 	if($conn){
	// 		mysql_select_db("user");
	// 	}
	// 	
	// if($user = $_POST["user"]){
	// 	$user = $_POST["user"];
	// 	$pwd=$_POST["pwd"];
	// 	
	// 	$result=mysql_query("select * from suer_info where user='$user'",$conn);
	// 	$row=mysql_num_rows($result);
	// 	if($row==1){
	// 		echo 0;
	// 	}else{
	// 		$res=mysql_query("insert into suer_info values('$user','$pwd','')",$conn);
	// 		echo 1;
	// 	}
	// }else{
	// 	
	// }
?>