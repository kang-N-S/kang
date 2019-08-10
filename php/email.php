<?php 
	header("Content-type:text/html;charset=utf-8");

			$user = $_POST["user"];
			$pwd=$_POST["pwd"];
			$email=$_POST['email'];
			
			$conn=mysql_connect("localhost","root","root");
			
			if($conn){
				mysql_select_db("user");
			}
			
			$result=mysql_query("select * from suer_info where user='$email'",$conn);
			$row=mysql_num_rows($result);
			if($row==1){
				echo 0;
			}else{
				mysql_query("insert into suer_info values('$user','$pwd','$email','')",$conn);
				echo 1;
			}
	
?>

