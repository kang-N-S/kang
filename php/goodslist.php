<?php 
	//header("Conntext-type;text/html;charset=utf-8");
	header("Content-type:text/html;charset=utf-8");

	// $pNum = $_POST["pNum"];
	// $price=$_POST["price"];
	// $img=$_POST['img'];
	// $title=$_POST['title'];
	$styleid=$_POST['styleid'];
	
	$conn=mysql_connect("localhost","root","root");
	
	if($conn){
		mysql_select_db("user");
	}
	
	$result=mysql_query("select * from syb where styleid='$styleid'",$conn);
	// var_dump($result);die;
	$rows=mysql_num_rows($result);
	$show=array();
	if(mysql_num_rows($result)>=1){
		while($rows=mysql_fetch_assoc($result)){
			 $show[]=$rows;
		}
		echo json_encode($show);//将返回数据转换为json格式
	}

?>