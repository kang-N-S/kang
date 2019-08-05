<?php 
	//header("Conntext-type;text/html;charset=utf-8");
	header("Content-type:text/html;charset=utf-8");

	$id = $_POST["username"];
	$pwd=$_POST["password"];
	$conn=mysql_connect("localhost","root","root");

	if($conn){
		mysql_select_db("user");
	}
	$result=mysql_query("select * from suer_info where num='$id' pwd='$pwd'",$conn);
	$row=mysql_num_rows($result);
	if($row>=1){
		echo 0;
	}else{
		mysql_query("insert into suer_info values('$id','$pwd')",$conn);
		echo 1;
	}

?>


