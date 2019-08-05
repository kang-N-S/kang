<?php

	//header("Conntext-type;text/html;charset=utf-8");
	header("Content-type:text/html;charset=utf-8");

	// $pNum = $_POST["pNum"];
	// $price=$_POST["price"];
	// $img=$_POST['img'];
	$id=$_GET['id'];
	echo $id;
	$conn=mysql_connect("localhost","root","root");
	
	if($conn){
		mysql_select_db("user");
	}
	$result=mysql_query("select * from goods where goods_id='$id'",$conn);
	// var_dump($result);die;
	
	$rows=mysql_num_rows($result);
	
	if(mysql_num_rows($result)>=1){
		$res=mysql_query("delete from goods where goods_id='$id'",$conn);
		// var_dump($res);
	}

?>